"use client";

import React, { useState, useEffect } from "react";
import { subscribeUser, unsubscribeUser, sendNotification } from "../app/actions"; // убедитесь, что путь корректный

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const PushNotificationManager: React.FC = () => {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(null);
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(true); // видимость компонента

  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
    // Через 5 секунд скрываем PushNotificationManager
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      updateViaCache: "none",
    });
    const sub = await registration.pushManager.getSubscription();
    setSubscription(sub);
  }

  async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
      ),
    });
    setSubscription(sub);
    const serializedSub = JSON.parse(JSON.stringify(sub));
    await subscribeUser(serializedSub);
  }

  async function unsubscribeFromPush() {
    await subscription?.unsubscribe();
    setSubscription(null);
    await unsubscribeUser();
  }

  async function sendTestNotification() {
    if (subscription) {
      await sendNotification(message);
      setMessage("");
    }
  }

  if (!isSupported || !isVisible) {
    return null;
  }

  return (
    <div
      style={{ animation: "fadeIn 0.5s ease-out" }}
      className="fixed top-4 left-4 p-4 border rounded-lg shadow-md bg-slate-800 text-slate-200 transition-opacity duration-500"
    >
      <h3 className="text-lg font-bold mb-2">Push Notifications</h3>
      {subscription ? (
        <>
          <p>You are subscribed to push notifications.</p>
          <button
            onClick={unsubscribeFromPush}
            className="px-4 py-2 bg-red-500 text-white rounded-md mt-2"
          >
            Unsubscribe
          </button>
          <input
            type="text"
            placeholder="Enter notification message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 p-2 border rounded-md w-full bg-slate-700 text-slate-200"
          />
          <button
            onClick={sendTestNotification}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Send Test Notification
          </button>
        </>
      ) : (
        <>
          <p>You are not subscribed to push notifications.</p>
          <button
            onClick={subscribeToPush}
            className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2"
          >
            Subscribe
          </button>
        </>
      )}
    </div>
  );
};

export default PushNotificationManager;

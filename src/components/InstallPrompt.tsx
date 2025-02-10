"use client";

import React, { useState, useEffect } from "react";

const InstallPrompt: React.FC = () => {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window)
    );
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

    // Показываем InstallPrompt через 6 секунд
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      // Скрываем его через 5 секунд после появления
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(hideTimer);
    }, 6000);
    return () => clearTimeout(showTimer);
  }, []);

  if (isStandalone || !isVisible) {
    return null;
  }

  return (
    <div
      style={{ animation: "fadeIn 0.5s ease-out" }}
      className="fixed top-4 left-4 p-4 border border-slate-700 rounded-lg shadow-md bg-slate-800 text-slate-200 transition-opacity duration-500"
    >
      <h3 className="text-lg font-bold">Install App</h3>
      <button className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded-md">
        Add to Home Screen
      </button>
      {isIOS && (
  <p className="mt-2 text-sm text-slate-400">
    To install this app on your iOS device, tap the share button{" "}
    <span role="img" aria-label="share icon">
      ⎋
    </span>{" "}
    and then &quot;Add to Home Screen&quot;{" "}
    <span role="img" aria-label="plus icon">
      ➕
    </span>.
  </p>
)}
    </div>
  );
};

export default InstallPrompt;


"use client";

import React, { useState, useEffect } from "react";

const InstallPrompt: React.FC = () => {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window)
    );
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
  }, []);

  if (isStandalone) {
    return null; // Не показываем, если уже установлено
  }

  return (
    <div className="p-4 border rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-bold">Install App</h3>
      <button className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded-md">
        Add to Home Screen
      </button>
      {isIOS && (
  <p className="mt-2 text-sm text-gray-600">
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
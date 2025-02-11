"use client";

import React, { useEffect, useState } from "react";

const UserPreferences: React.FC = () => {
  const [address, setAddress] = useState("");
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [allergies, setAllergies] = useState("");
  const [otherPreferences, setOtherPreferences] = useState("");
  const [message, setMessage] = useState("");

  // При монтировании компонента загружаем данные из localStorage
  useEffect(() => {
    const stored = localStorage.getItem("userPreferences");
    if (stored) {
      const data = JSON.parse(stored);
      setAddress(data.address || "");
      // Проверяем, есть ли значение в новом формате (is_vegetarian) или в старом (isVegetarian)
      setIsVegetarian(data.is_vegetarian ?? data.isVegetarian ?? false);
      setAllergies(data.allergies || "");
      setOtherPreferences((data.other_preferences ?? data.otherPreferences) || "");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Получаем идентификатор пользователя из localStorage (предполагается, что он сохранён после логина)
    const userId = Number(localStorage.getItem("userId") || 0);

    // Формируем объект данных с привязкой к пользователю
    const data = {
      user_id: userId,
      address,
      is_vegetarian: isVegetarian,
      allergies,
      other_preferences: otherPreferences,
    };

    // Сохраняем данные в localStorage
    localStorage.setItem("userPreferences", JSON.stringify(data));

    try {
      const response = await fetch("http://127.0.0.1:8000/preferences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("Preferences saved successfully!");
      } else {
        setMessage("Error saving preferences on backend");
      }
    } catch {
      setMessage("Error connecting to backend");
    }
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Your Preferences</h2>
      <div className="mb-4">
        <label className="block text-sm mb-1" htmlFor="address">
          Address
        </label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
          className="w-full p-2 bg-gray-800 rounded-md text-white placeholder-gray-400"
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isVegetarian}
            onChange={(e) => setIsVegetarian(e.target.checked)}
            className="mr-2"
          />
          Are you vegetarian?
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-1" htmlFor="allergies">
          Allergies
        </label>
        <input
          id="allergies"
          type="text"
          value={allergies}
          onChange={(e) => setAllergies(e.target.value)}
          placeholder="List any allergies"
          className="w-full p-2 bg-gray-800 rounded-md text-white placeholder-gray-400"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-1" htmlFor="otherPreferences">
          Other Preferences
        </label>
        <input
          id="otherPreferences"
          type="text"
          value={otherPreferences}
          onChange={(e) => setOtherPreferences(e.target.value)}
          placeholder="Any additional preferences"
          className="w-full p-2 bg-gray-800 rounded-md text-white placeholder-gray-400"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 rounded-full text-white"
      >
        Save Preferences
      </button>
      {message && <p className="mt-2 text-green-500">{message}</p>}
    </form>
  );
};

export default UserPreferences;


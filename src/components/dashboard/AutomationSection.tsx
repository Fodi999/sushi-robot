// src/components/dashboard/AutomationSection.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface AutomationCard {
  title: string;
  description: string;
  image_url: string;
  price: string;
  bg_class: string;
  text_class: string;
}

const AutomationSection: React.FC = () => {
  const [cards, setCards] = useState<AutomationCard[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchCards() {
      try {
        // Обращаемся к вашему серверу по адресу http://127.0.0.1:8000/cards
        const response = await fetch("https://fish-botai-ye1g.shuttle.app/cards");

        if (!response.ok) {
          setError("Ошибка загрузки карточек");
          return;
        }
        const data = await response.json();
        setCards(data);
      } catch (err) {
        setError("Ошибка подключения к серверу");
        console.error(err);
      }
    }
    fetchCards();
  }, []);

  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold">Automation</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex gap-4 mt-4 overflow-x-auto scrollbar-hide">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`min-w-[240px] p-4 ${card.bg_class} ${card.text_class} rounded-2xl shadow-md flex flex-col`}
          >
            <Image
              src={card.image_url}
              alt={card.title}
              width={340}
              height={160}
              priority
              className="object-cover rounded-md mb-4"
            />
            <p className="text-lg font-semibold">{card.title}</p>
            <p className="text-sm text-gray-500">{card.description}</p>
            <p className="mt-2 font-bold">{card.price}</p>
            <button className="w-full mt-4 py-2 bg-black text-white rounded-full">
              В корзину
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutomationSection;


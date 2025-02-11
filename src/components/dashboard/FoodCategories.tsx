// src/components/dashboard/FoodCategories.tsx
"use client";

import React from "react";

const FoodCategories: React.FC = () => {
  const categories = ["Суши", "Роллы", "Сашими", "Салаты", "Закуски"];

  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold">Выберите категорию</h2>
      <div className="flex gap-3 mt-2 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default FoodCategories;

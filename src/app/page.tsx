"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Lightbulb, Pencil, ShieldAlert } from "lucide-react";

const features = [
  {
    icon: <Lightbulb size={20} className="text-gray-300" />,
    text: "Свежие ингредиенты и вкус",
  },
  {
    icon: <Pencil size={20} className="text-gray-300" />,
    text: "Быстрое оформление заказа",
  },
  {
    icon: <ShieldAlert size={20} className="text-gray-300" />,
    text: "Качество и безопасность",
  },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-black text-gray-100 px-4 sm:px-6">
      {/* Лого */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full shadow-md"></div>
        <span className="text-base sm:text-lg font-semibold tracking-wide">sushirobot</span>
      </div>

      {/* Заголовок */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight mb-8 sm:mb-10">
        Доставка суши <br />
        <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
          к вашей двери
        </span>
      </h1>

      {/* Карточки с преимуществами */}
      <div className="w-full max-w-xs sm:max-w-md space-y-3 sm:space-y-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center p-3 sm:p-4 bg-gray-800/50 rounded-xl shadow-md border border-gray-800 transition-all hover:bg-gray-800/70"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-900/50 rounded-full">
              {feature.icon}
            </div>
            <p className="ml-3 sm:ml-4 text-xs sm:text-sm text-gray-300">{feature.text}</p>
          </div>
        ))}
      </div>

      {/* Кнопки входа и регистрации */}
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md">
        <Button
          variant="outline"
          className="w-full h-10 sm:h-12 rounded-xl text-gray-200 border-gray-700 bg-gray-800/50 hover:bg-gray-700/50 hover:text-white transition-all"
          onClick={() => router.push("/login")}
        >
          Вход
        </Button>
        <Button
          className="w-full h-10 sm:h-12 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium transition-all shadow-md hover:shadow-lg"
          onClick={() => router.push("/register")}
        >
          Регистрация
        </Button>
      </div>
    </div>
  );
}


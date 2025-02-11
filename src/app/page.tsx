"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Lightbulb, Pencil, ShieldAlert } from "lucide-react";

const features = [
  {
    icon: <Lightbulb size={20} className="text-white" />,
    text: "Remembers what user said earlier in the conversation",
  },
  {
    icon: <Pencil size={20} className="text-white" />,
    text: "Allows user to provide follow-up corrections",
  },
  {
    icon: <ShieldAlert size={20} className="text-white" />,
    text: "Trained to decline inappropriate requests",
  },
];

export default function HomePage() {
  const router = useRouter(); // инициализация роутера

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white px-6">
      {/* Лого */}
      <div className="absolute top-6 left-6 flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></div>
        <span className="text-lg font-semibold tracking-wide">sushirobot</span>
      </div>

      {/* Заголовок */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center leading-tight">
        Explore infinite <br />
        <span className="text-lime-300">capabilities</span> of writing
      </h1>

      {/* Карточки-функции */}
      <div className="mt-10 space-y-4 w-full max-w-md">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-md"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-black/40 rounded-full">
              {feature.icon}
            </div>
            <p className="ml-4 text-sm text-white">{feature.text}</p>
          </div>
        ))}
      </div>

      {/* Кнопки */}
      <div className="mt-10 flex space-x-4">
        <Button
          variant="outline"
          className="w-32 h-12 rounded-full text-white border-white/30"
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
        <Button
          className="w-32 h-12 rounded-full bg-white text-black hover:bg-gray-300"
          onClick={() => router.push("/register")} // Переход на страницу регистрации
        >
          Register
        </Button>
      </div>
    </div>
  );
}



"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Обработчик изменения полей формы
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Отправка данных на локальный backend (используем http://localhost:8080)
      const response = await fetch("https://go-robot-670748333372.us-central1.run.app/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
        }),
      });

      if (!response.ok) {
        throw new Error("Регистрация не удалась");
      }

      const data = await response.json();
      console.log("Регистрация прошла успешно:", data);
      router.push(`/user/${data.id}`);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || "Что-то пошло не так");
        } else {
          setError("Что-то пошло не так");
        }
      } finally {
        setLoading(false);
      }
      }; // Закрывающая фигурная скобка для handleSubmit
      

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white px-6">
      {/* Логотип */}
      <div className="absolute top-6 left-6 flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></div>
        <span className="text-lg font-semibold tracking-wide">sushirobot</span>
      </div>

      {/* Заголовок */}
      <h1 className="text-4xl font-bold text-center">Создайте свою учетную запись</h1>
      <p className="text-white/70 text-sm mt-2">Начните своё путешествие вместе с нами</p>

      {/* Форма регистрации */}
      <form onSubmit={handleSubmit} className="w-full max-w-md mt-8 space-y-4">
        <Input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="текст" // Заглушка для поля "Имя"
          className="w-full p-3 bg-white/10 text-white rounded-lg placeholder-white/50 backdrop-blur-md"
          required
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Электронная почта"
          className="w-full p-3 bg-white/10 text-white rounded-lg placeholder-white/50 backdrop-blur-md"
          required
        />
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Создай пароль" // Заглушка для поля "Пароль"
          className="w-full p-3 bg-white/10 text-white rounded-lg placeholder-white/50 backdrop-blur-md"
          required
        />
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Номер телефона"
          className="w-full p-3 bg-white/10 text-white rounded-lg placeholder-white/50 backdrop-blur-md"
          required
        />

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <Button
          type="submit"
          disabled={loading}
          className={`w-full max-w-md mt-6 bg-white text-black rounded-full hover:bg-gray-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Регистрация..." : "Зарегистрироваться"}
        </Button>
      </form>

      <Link href="/" className="mt-4 text-white/50 text-sm hover:underline">
        Назад на главную
      </Link>
    </div>
  );
}




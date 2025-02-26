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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
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
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-black text-gray-100 px-4 sm:px-6">
      {/* Логотип */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full shadow-md"></div>
        <span className="text-base sm:text-lg font-semibold tracking-wide">sushirobot</span>
      </div>

      {/* Заголовок */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center">Регистрация</h1>
      <p className="text-gray-400 text-xs sm:text-sm mt-2 text-center">Начните с нами</p>

      {/* Форма регистрации */}
      <form onSubmit={handleSubmit} className="w-full max-w-xs sm:max-w-md mt-6 sm:mt-8 space-y-4">
        <Input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Имя"
          className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-xl placeholder-gray-500 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
          required
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Электронная почта"
          className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-xl placeholder-gray-500 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
          required
        />
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Пароль"
          className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-xl placeholder-gray-500 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
          required
        />
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Номер телефона"
          className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-xl placeholder-gray-500 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
          required
        />

        {error && <p className="text-red-400 text-xs sm:text-sm text-center">{error}</p>}

        <Button
          type="submit"
          disabled={loading}
          className={`w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium rounded-xl py-2 sm:py-3 transition-all shadow-md hover:shadow-lg ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Регистрация..." : "Зарегистрироваться"}
        </Button>
      </form>

      {/* Ссылка */}
      <Link href="/" className="mt-4 sm:mt-6 text-gray-400 text-xs sm:text-sm hover:text-gray-200 transition-colors">
        На главную
      </Link>
    </div>
  );
}




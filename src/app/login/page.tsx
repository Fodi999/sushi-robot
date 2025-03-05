"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("https://remote-marilee-fodifood-7bbeaaf7.koyeb.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: fullName,
          password: password,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        setError(errText || "Ошибка входа");
        return;
      }

      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data));
      setSuccess("Вход выполнен успешно!");
      router.push(`/user/${data.id}`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Произошла ошибка");
      } else {
        setError("Произошла ошибка");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-black text-gray-100 px-4 sm:px-6">
      {/* Логотип */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full shadow-md"></div>
        <span className="text-base sm:text-lg font-semibold tracking-wide">mindmate</span>
      </div>

      {/* Заголовок */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center">Вход</h1>
      <p className="text-gray-400 text-xs sm:text-sm mt-2 text-center">Добро пожаловать! Введите данные</p>

      {/* Форма логина */}
      <form onSubmit={handleSubmit} className="w-full max-w-xs sm:max-w-md mt-6 sm:mt-8 space-y-4">
        <Input
          type="text"
          placeholder="Имя"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-xl placeholder-gray-500 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-xl placeholder-gray-500 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
        />
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium rounded-xl py-2 sm:py-3 transition-all shadow-md hover:shadow-lg"
        >
          Войти
        </Button>
      </form>

      {/* Сообщения об ошибке или успехе */}
      {error && <p className="mt-3 sm:mt-4 text-red-400 text-xs sm:text-sm">{error}</p>}
      {success && <p className="mt-3 sm:mt-4 text-gray-300 text-xs sm:text-sm">{success}</p>}

      {/* Ссылки */}
      <div className="mt-4 sm:mt-6 text-gray-400 text-xs sm:text-sm space-y-2 text-center">
        <Link href="/register" className="hover:text-gray-200 transition-colors">
          Нет аккаунта? Зарегистрируйтесь
        </Link>
        <br />
        <Link href="/" className="hover:text-gray-200 transition-colors">
          На главную
        </Link>
      </div>
    </div>
  );
}

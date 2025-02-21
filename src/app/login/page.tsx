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
    
      const response = await fetch("https://go-robot-670748333372.us-central1.run.app/login", {
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

      // Сохраняем данные пользователя для дальнейшей работы
      localStorage.setItem("user", JSON.stringify(data));

      setSuccess("Вход выполнен успешно!");
      // Перенаправляем пользователя на dashboard
      router.push("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Произошла ошибка");
      } else {
        setError("Произошла ошибка");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white px-6">
      {/* Логотип */}
      <div className="absolute top-6 left-6 flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></div>
        <span className="text-lg font-semibold tracking-wide">mindmate</span>
      </div>

      {/* Заголовок */}
      <h1 className="text-4xl font-bold text-center">Sign in</h1>
      <p className="text-white/70 text-sm mt-2">
        Welcome back! Please enter your details
      </p>

      {/* Форма логина */}
      <form onSubmit={handleSubmit} className="w-full max-w-md mt-8 space-y-4">
        <Input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-3 bg-white/10 text-white rounded-lg placeholder-white/50 backdrop-blur-md"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 bg-white/10 text-white rounded-lg placeholder-white/50 backdrop-blur-md"
        />

        <Button
          type="submit"
          className="w-full max-w-md mt-6 bg-white text-black rounded-full hover:bg-gray-300"
        >
          Login
        </Button>
      </form>

      {/* Сообщения об ошибке или успехе */}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {success && <p className="mt-4 text-green-500">{success}</p>}

      {/* Ссылки */}
      <div className="mt-4 text-white/50 text-sm space-y-2 text-center">
        <Link href="/register" className="hover:underline">
          Don&apos;t have an account? Register
        </Link>
        <br />
        <Link href="/" className="hover:underline">
          Back to home
        </Link>
      </div>
    </div>
  );
}

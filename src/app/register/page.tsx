"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState(""); // Если хотите отправлять email, добавьте соответствующую обработку на бекенде
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      full_name: fullName,
      password: password,
      email: email, // теперь поле передается на сервер
    };
    

    try {
      const response = await fetch("https://fish-botai-ye1g.shuttle.app/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        setError(errorText || "Ошибка регистрации");
        setSuccess("");
      } else {
        // Ожидаем, что сервер вернёт JSON с данными нового пользователя, включая id
        const responseData = await response.json();
        // Сохраняем идентификатор пользователя в localStorage
        localStorage.setItem("userId", responseData.id.toString());

        setSuccess("Регистрация прошла успешно!");
        setError("");
        setFullName("");
        setEmail("");
        setPassword("");

        // Перенаправляем на страницу дашборда
        router.push("/dashboard");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError("Ошибка: " + err.message);
      } else {
        setError("Ошибка регистрации");
      }
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white px-6">
      {/* Лого */}
      <div className="absolute top-6 left-6 flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></div>
        <span className="text-lg font-semibold tracking-wide">sushirobot</span>
      </div>

      {/* Заголовок */}
      <h1 className="text-4xl font-bold text-center">Create your account</h1>
      <p className="text-white/70 text-sm mt-2">Start your journey with us</p>

      {/* Форма регистрации */}
      <form onSubmit={handleSubmit} className="w-full max-w-md mt-8 space-y-4">
        <Input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-3 bg-white/10 text-white rounded-lg placeholder-white/50 backdrop-blur-md"
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 bg-white/10 text-white rounded-lg placeholder-white/50 backdrop-blur-md"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 bg-white/10 text-white rounded-lg placeholder-white/50 backdrop-blur-md"
        />

        {/* Кнопка регистрации */}
        <Button
          type="submit"
          className="w-full max-w-md mt-6 bg-white text-black rounded-full hover:bg-gray-300"
        >
          Register
        </Button>
      </form>

      {/* Сообщения об ошибках или успехе */}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {success && <p className="mt-4 text-green-500">{success}</p>}

      {/* Кнопка возврата */}
      <Link href="/" className="mt-4 text-white/50 text-sm hover:underline">
        Back to home
      </Link>
    </div>
  );
}



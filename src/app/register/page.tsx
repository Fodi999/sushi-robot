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
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Обработчик изменения полей формы с аннотацией типа события
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Обработчик отправки формы с аннотацией типа события
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Отправка данных на бэкенд
      const response = await fetch("https://fish-botai-ye1g.shuttle.app/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
        }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      console.log("Registered successfully:", data);
      router.push("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Something went wrong");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white px-6">
      {/* Логотип */}
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
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Full Name"
          className="w-full p-3 bg-white/10 text-white rounded-lg placeholder-white/50 backdrop-blur-md"
          required
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full p-3 bg-white/10 text-white rounded-lg placeholder-white/50 backdrop-blur-md"
          required
        />
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="w-full p-3 bg-white/10 text-white rounded-lg placeholder-white/50 backdrop-blur-md"
          required
        />

        {/* Отображение ошибки */}
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        {/* Кнопка регистрации */}
        <Button
          type="submit"
          disabled={loading}
          className={`w-full max-w-md mt-6 bg-white text-black rounded-full hover:bg-gray-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Registering..." : "Register"}
        </Button>
      </form>

      {/* Ссылка для возврата */}
      <Link href="/" className="mt-4 text-white/50 text-sm hover:underline">
        Back to home
      </Link>
    </div>
  );
}






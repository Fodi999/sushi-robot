"use client";

import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

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
      <form className="w-full max-w-md mt-8 space-y-4">
        <Input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 bg-white/10 text-white rounded-lg placeholder-white/50 backdrop-blur-md"
        />
        <Input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-white/10 text-white rounded-lg placeholder-white/50 backdrop-blur-md"
        />
        <Input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-white/10 text-white rounded-lg placeholder-white/50 backdrop-blur-md"
        />

        {/* Кнопка регистрации */}
        <Button
          type="submit"
          className="w-full max-w-md mt-6 bg-white text-black rounded-full hover:bg-gray-300"
          onClick={() => router.push("/dashboard")}
        >
          Register
        </Button>
      </form>

      {/* Ссылка для возврата */}
      <Link href="/" className="mt-4 text-white/50 text-sm hover:underline">
        Back to home
      </Link>
    </div>
  );
}






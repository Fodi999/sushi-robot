// src/components/dashboard/Header.tsx
"use client";

import React, { useState } from "react";

const emojiList = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😊",
  "😉",
  "😍",
  "🥰",
  "😎",
  "🤩",
  "😇",
  "🤗",
];

const getRandomEmoji = () => {
  return emojiList[Math.floor(Math.random() * emojiList.length)];
};

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  const [avatar, setAvatar] = useState(getRandomEmoji());

  const handleAvatarClick = () => {
    setAvatar(getRandomEmoji());
  };

  return (
    <header className="flex items-center justify-between">
      <h1 className="text-4xl font-bold">
        Good morning, <br /> {userName}
      </h1>
      <div
        className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center cursor-pointer text-2xl"
        onClick={handleAvatarClick}
      >
        {avatar}
      </div>
    </header>
  );
};

export default Header;

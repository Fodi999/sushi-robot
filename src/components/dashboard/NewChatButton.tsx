// src/components/dashboard/NewChatButton.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";

const NewChatButton: React.FC = () => {
  const router = useRouter();

  return (
    <div className="mt-8">
      <button
        className="w-full py-4 bg-white text-black rounded-full flex items-center justify-center"
        onClick={() => router.push("/robot")}
      >
        + New chat
      </button>
    </div>
  );
};

export default NewChatButton;

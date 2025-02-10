// src/components/ChatBot/ChatMessages.tsx

import React from "react";
import { Message } from "@/types";

interface ChatMessagesProps {
  messages: Message[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.length === 0 ? (
        <div className="flex flex-col items-start">
          <p className="bg-gray-800 border border-gray-300 rounded-lg shadow p-4 text-gray-800 max-w-md">
            Привет! Я SushiBot 😃. Хотите попробовать наши свежие роллы и суши? 🍣
          </p>
        </div>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[80%] p-3   rounded-2xl ${
                message.isBot ? "bg-gray-800 text-gray-200" : "bg-blue-500 text-slate-200"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ChatMessages;

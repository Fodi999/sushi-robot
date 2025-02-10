// src/components/ChatBot/ChatMessages.tsx

import React from "react";
import { Message } from "@/types";

interface ChatMessagesProps {
  messages: Message[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  return (
    <div className="space-y-6">
      {messages.length === 0 ? (
        <div className="flex flex-col items-start">
          <p className="bg-gradient-to-r from-gray-800 to-gray-900 bg-opacity-60 border border-gray-800 rounded-2xl shadow-lg p-4 sm:p-5 text-gray-100 max-w-md transition-all duration-300 backdrop-blur-xl">
            Привет! Я SushiBot 😃. Хотите попробовать наши свежие роллы и суши? 🍣
          </p>
        </div>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? "flex-col items-start" : "justify-end"}`}
          >
            <p className="bg-gradient-to-r from-gray-800 to-gray-900 bg-opacity-60 border border-gray-800 rounded-2xl shadow-lg p-4 sm:p-5 text-gray-100 max-w-md transition-all duration-300 backdrop-blur-xl">
              {message.text}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default ChatMessages;
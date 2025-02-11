"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, ArrowLeft, MoreHorizontal } from "lucide-react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      sender: "user",
      text: "Analyze UX for Job Finder app",
      avatar: "/user-avatar.png",
    },
    {
      sender: "bot",
      text: `Key aspects of a job finder app's UX analysis:\n1. Seamless onboarding process\n2. Intuitive search and filtering\n3. Clear and organized job listings\n4. Personalized job recommendations\n5. Easy application process\n6. Communication and collaboration features\n7. User feedback and support options\n8. Accessibility considerations\n9. Performance and speed\n10. Visual design and branding consistency.`,
      avatar: "/bot-avatar.png",
    },
    {
      sender: "user",
      text: "Onboarding copy for it",
      avatar: "/user-avatar.png",
    },
    {
      sender: "bot",
      text: `Sure, here are some options for onboarding copy for Job Finder App:\n\n• "Welcome! Personalize your job search with a few taps. Let’s find you the perfect fit!"\n• "Let’s customize your job search! Tell us your preferences to find your dream job."\n• "Get started on your job search! Share your job interests and location for personalized recommendations."`,
      avatar: "/bot-avatar.png",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input, avatar: "/user-avatar.png" }]);
    setInput("");
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Header */}
      <div className="p-4 flex items-center bg-[#1C1C1E] shadow-md border-b border-gray-700">
        <button className="mr-4 text-white">
          <ArrowLeft className="w-6 h-6" 
          
          />
        </button>
        <h1 className="text-lg font-semibold flex-grow text-white">Job Finder UX</h1>
        <button className="text-white">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </div>

      {/* Chat messages */}
      <ScrollArea className="flex-1 p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-1 flex items-end ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.sender === "bot" && (
              <Image src={msg.avatar} alt="Bot" width={40} height={40} className="w-10 h-10 rounded-full mr-3" />
            )}
            <div
              className={`p-4 rounded-2xl max-w-xs shadow-md border ${
                msg.sender === "user"
                  ? "bg-[#3A3A3C] text-white border-gray-600"
                  : "bg-[#2C2C2E] text-gray-300 border-gray-700"
              }`}
            >
              <p className="text-sm whitespace-pre-line">{msg.text}</p>
            </div>
            {msg.sender === "user" && (
              <Image src={msg.avatar} alt="User" width={40} height={40} className="w-10 h-10 rounded-full ml-3" />
            )}
          </div>
        ))}
      </ScrollArea>

      {/* Input field */}
      <div className="p-4 bg-gradient-to-b from-black to-gray-900 flex items-center border-t border-gray-700">
        <Input
          className="flex-grow bg-[#2C2C2E] bg-opacity-50 text-white p-3 rounded-full placeholder-gray-400 border border-gray-700"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message..."
        />
        <Button
          onClick={handleSend}
          className="ml-2 bg-[#3A3A3C] text-white rounded-full p-3 shadow-md border border-gray-600"
        >
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}




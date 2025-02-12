"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, ArrowLeft, MoreHorizontal } from "lucide-react";

interface Message {
  sender: string;
  text: string;
  avatar: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("wss://fish-botai-ye1g.shuttle.app/ws/");
    wsRef.current = socket;
  
    socket.onopen = () => {
      console.log("WebSocket connected");
    };
  
    socket.onmessage = (event) => {
      const data = event.data;
      if (typeof data === "string" && (data.trim().startsWith("{") || data.trim().startsWith("["))) {
        try {
          const incoming: Message = JSON.parse(data);
          console.log("Received JSON data:", incoming);
          setMessages((prev) => [...prev, incoming]);
        } catch (error) {
          console.error("Ошибка парсинга JSON сообщения:", error);
        }
      } else {
        console.log("Получено не-JSON сообщение:", data);
        // При необходимости можно обработать не-JSON данные
      }
    };
  
    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
    };
  
    return () => {
      socket.close();
    };
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage: Message = { sender: "user", text: input, avatar: "/feis 1.png" };
    setMessages((prev) => [...prev, userMessage]);

    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      try {
        wsRef.current.send(JSON.stringify(userMessage));
      } catch (error) {
        console.error("Ошибка отправки сообщения:", error);
      }
    }
    setInput("");
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Header */}
      <div className="p-4 flex items-center bg-[#1C1C1E] shadow-md border-b border-gray-700">
        <button className="mr-4 text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold flex-grow text-white">Job Finder UX</h1>
        <button className="text-white">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </div>

      {/* Вставленная фотография */}
      <div className="flex justify-center p-4">
        <Image src="/feis 1.png" alt="Inserted Photo" width={200} height={200} />
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
             <Image src="/feis 1.png" alt="Inserted Photo" width={200} height={200} priority />
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





"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/ChatBot/Header";
import ProductMenu from "@/components/ChatBot/ProductMenu";
import ChatMessages from "@/components/ChatBot/ChatMessages";
import InputArea from "@/components/ChatBot/InputArea";
import ProductModal from "@/components/ChatBot/ProductModal";
import PushNotificationManager from "@/components/PushNotificationManager";
import InstallPrompt from "@/components/InstallPrompt";
import { SushiProduct, Message } from "@/types";

// Функция генерации уникального ID
const generateId = () => Math.random().toString(36).substr(2, 9);

const ChatBot: React.FC = () => {
  const [menuProducts, setMenuProducts] = useState<SushiProduct[]>([]);
  const [selectedCard, setSelectedCard] = useState<SushiProduct | null>(null);
  const [likeCount, setLikeCount] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<WebSocket | null>(null);

  // Загружаем продукты с backend по API‑эндпоинту.
  useEffect(() => {
    async function fetchProducts() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
        const res = await fetch(`${baseUrl}/api/sushi-products`);
        if (!res.ok) {
          throw new Error("Failed to fetch sushi products");
        }
        const data: SushiProduct[] = await res.json();
        setMenuProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  // Сброс лайков при выборе карточки
  useEffect(() => {
    if (selectedCard) {
      setLikeCount(0);
    }
  }, [selectedCard]);

  // Закрытие модального окна при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedCard(null);
      }
    };
    if (selectedCard) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedCard]);

  // Подключение к WebSocket
  useEffect(() => {
    const wsUrl = process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8000/ws/";
    const socket = new WebSocket(wsUrl);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.message_type === "product_options") {
          setMenuProducts(data.products);
          const systemMessage: Message = {
            id: generateId(),
            text: "Выберите продукт из меню ниже:",
            isBot: true,
            timestamp: Date.now(),
          };
          setMessages((prev) => [...prev, systemMessage]);
          return;
        }
      } catch {
        // Если сообщение не является JSON – обрабатываем как текст
      }
      const botMessage: Message = {
        id: generateId(),
        text: event.data,
        isBot: true,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, botMessage]);
    };

    socket.onclose = () => {
      console.log("WebSocket closed");
    };

    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    return () => {
      socket.close();
    };
  }, []);

  const onLikeClick = () => setLikeCount((prev) => prev + 1);
  const onOrderClick = () => {
    console.log(`Order placed for ${selectedCard?.name}`);
    setSelectedCard(null);
  };

  // Подготовка данных для модального окна
  const section =
    selectedCard && {
      id: selectedCard.id,
      imageUrl: selectedCard.image,
      title: selectedCard.name,
      description: selectedCard.description,
      price: selectedCard.price,
      capacities: [{ value: "recipe", active: true }],
      buttonText: "Заказать",
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const userMessage: Message = {
      id: generateId(),
      text: inputText,
      isBot: false,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMessage]);
    socketRef.current?.send(inputText);
    setInputText("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-500 to-teal-400 relative px-4 sm:px-8">
      <Header />
      <PushNotificationManager />
      <InstallPrompt />
      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        {menuProducts.length > 0 && (
          <ProductMenu
            products={menuProducts}
            onProductClick={setSelectedCard}
          />
        )}
        <ChatMessages messages={messages} />
      </main>
      <InputArea
        inputText={inputText}
        setInputText={setInputText}
        onSubmit={handleSubmit}
      />
      {selectedCard && section && (
        <ProductModal
          product={section}
          likeCount={likeCount}
          heartColor={likeCount > 0 ? "text-red-500" : "text-gray-400"}
          onLikeClick={onLikeClick}
          onOrderClick={onOrderClick}
          modalRef={modalRef}
        />
      )}
    </div>
  );
};

export default ChatBot;

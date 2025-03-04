"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, X, Check, CheckCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

interface Message {
  chat_id: string;
  sender: string;
  text: string;
  timestamp: number;
  read: boolean;
}

interface ServerData {
  messages?: Message[];
  onlineUsers?: number;
  text?: string;
  update?: string;
  timestamp?: number;
  read?: boolean;
}

interface Guest {
  id: number;
  username: string;
  email: string;
  password: string;
  phone: string;
}

interface SupportProps {
  guest: Guest;
}

export default function Support({ guest }: SupportProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [ws, setWs] = useState<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const clientIdRef = useRef("user_" + Math.random().toString(36).substr(2, 9));
  const clientId = clientIdRef.current;
  const chatId = "support_chat";
  const username = guest.username;
  const wsUrl = "wss://remote-marilee-fodifood-7bbeaaf7.koyeb.app/ws?client_id=123&chat_id=456&username=" + encodeURIComponent("user1");

  useEffect(() => {
    if (isChatOpen && !ws) {
      const connectWebSocket = () => {
        const websocket = new WebSocket(wsUrl);

        websocket.onopen = () => {
          console.log("WebSocket успешно подключен");
          setWs(websocket);
        };

        websocket.onmessage = (event) => {
          try {
            const data: ServerData = JSON.parse(event.data);
            if (data.messages && data.onlineUsers !== undefined) {
              setMessages(data.messages.map((msg) => ({ ...msg, read: msg.read ?? false })));
            } else if (data.text) {
              setMessages((prev) => [
                ...prev,
                {
                  chat_id: chatId,
                  sender: username,
                  text: data.text || "", // Fix 1: Ensure text is always a string
                  timestamp: Date.now(),
                  read: false,
                } as Message,
              ]);
            } else if (data.update === "read" && data.timestamp) {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.timestamp === data.timestamp ? { ...msg, read: data.read ?? false } : msg
                )
              );
            }
          } catch (error) {
            console.error("Ошибка при разборе сообщения:", error);
          }
        };

        websocket.onclose = (event) => {
          console.log("WebSocket закрыт:", event.code, event.reason);
          setWs(null);
          setTimeout(connectWebSocket, 2000);
        };

        websocket.onerror = (event) => {
          console.error("Ошибка WebSocket:", event);
          websocket.close();
        };
      };

      connectWebSocket();
    }

    return () => {
      if (ws?.readyState === WebSocket.OPEN) ws.close();
    };
  }, [isChatOpen, ws, wsUrl, username]); // Fix 2: Add username to dependencies

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "" || !ws || ws.readyState !== WebSocket.OPEN) return;
    ws.send(JSON.stringify({ text: inputMessage }));
    setInputMessage("");
  };

  const handleCloseChat = () => {
    if (ws?.readyState === WebSocket.OPEN) ws.close();
    setIsChatOpen(false);
    setMessages([]);
    setWs(null);
  };

  const formatTimestamp = (timestamp: number) =>
    timestamp && !isNaN(timestamp)
      ? new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      : "Неизвестно";

  const chatVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <TooltipProvider>
      <div
        className={`fixed bottom-4 z-50 ${
          isChatOpen
            ? "inset-x-2 md:left-0 md:right-0 md:flex md:justify-center"
            : "left-1/2 transform -translate-x-1/2"
        }`}
      >
        <AnimatePresence>
          <motion.div variants={chatVariants} initial="hidden" animate="visible" exit="exit">
            <Card
              className={`bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl shadow-lg transition-all hover:shadow-xl w-full ${
                isChatOpen ? "h-[85vh] md:w-[1000px] md:h-[80vh]" : "w-[280px] sm:w-80"
              }`}
            >
              <CardContent className="p-3 md:p-5 flex flex-col h-full text-gray-100">
                {!isChatOpen ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-full space-y-3"
                  >
                    <MessageCircle className="h-10 w-10 md:h-12 md:w-12 text-gray-300 transition-colors hover:text-gray-100" />
                    <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Поддержка
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400">Мы готовы помочь</p>
                    <Button
                      onClick={() => setIsChatOpen(true)}
                      className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium rounded-xl py-1.5 md:py-2 text-sm md:text-base transition-all shadow-md hover:shadow-lg"
                    >
                      Начать чат
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col h-full"
                  >
                    <div className="flex justify-between items-center border-b border-gray-800 pb-2 mb-3">
                      <h3 className="text-base md:text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Чат поддержки
                      </h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCloseChat}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <X className="h-3 w-3 md:h-4 md:w-4" />
                      </Button>
                    </div>
                    <div className="flex-1 overflow-y-auto space-y-2 md:space-y-3 pr-1 md:pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
                      {messages.map((message, index) => (
                        <motion.div
                          key={`${message.timestamp}-${index}`}
                          variants={messageVariants}
                          initial="hidden"
                          animate="visible"
                          className={`flex ${message.sender === clientId ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[75%] p-2 md:p-3 rounded-xl shadow-md ${
                              message.sender === clientId
                                ? "bg-gray-700 text-white"
                                : "bg-gray-800 text-gray-100"
                            }`}
                          >
                            <p className="text-[0.7rem] md:text-xs font-medium text-gray-300 mb-1">
                              {message.sender === clientId ? "Вы" : message.sender}
                            </p>
                            <p className="text-xs md:text-sm mb-1 md:mb-2">{message.text}</p>
                            <div className="flex justify-between items-end">
                              <span className="text-[0.55rem] md:text-[0.6rem] text-gray-400">
                                {formatTimestamp(message.timestamp)}
                              </span>
                              {message.sender === clientId && (
                                <span className="ml-1 md:ml-2">
                                  {message.read ? (
                                    <Tooltip>
                                      <TooltipTrigger>
                                        <CheckCheck className="h-2.5 w-2.5 md:h-3 md:w-3 text-gray-300" />
                                      </TooltipTrigger>
                                      <TooltipContent>Прочитано</TooltipContent>
                                    </Tooltip>
                                  ) : (
                                    <Tooltip>
                                      <TooltipTrigger>
                                        <Check className="h-2.5 w-2.5 md:h-3 md:w-3 text-gray-400" />
                                      </TooltipTrigger>
                                      <TooltipContent>Доставлено</TooltipContent>
                                    </Tooltip>
                                  )}
                                </span>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                    <div className="flex gap-1 md:gap-2 mt-3 md:mt-4">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                        placeholder="Сообщение..."
                        className="flex-1 bg-gray-800 text-white border-gray-700 rounded-xl px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                      />
                      <Button
                        onClick={handleSendMessage}
                        className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium rounded-xl px-3 md:px-4 py-1.5 md:py-2 transition-all shadow-md hover:shadow-lg"
                        disabled={!ws || ws.readyState !== WebSocket.OPEN}
                      >
                        <Send className="h-3 w-3 md:h-4 md:w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </TooltipProvider>
  );
}







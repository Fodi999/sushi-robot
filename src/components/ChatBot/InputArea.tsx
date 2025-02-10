// src/components/ChatBot/InputArea.tsx
"use client";

import React, { useRef, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Paperclip, Mic } from "lucide-react";

interface InputAreaProps {
  inputText: string;
  setInputText: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const InputArea: React.FC<InputAreaProps> = ({ inputText, setInputText, onSubmit }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Автоматически подстраиваем высоту textarea под содержимое
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputText]);

  return (
    <footer className="border-t border-slate-700 p-4 sm:p-6">
      <form onSubmit={onSubmit}>
        {/* Панель с кнопками */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex space-x-2">
            <Button type="button" size="icon" variant="ghost" className="h-8 w-8">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Button type="button" size="icon" variant="ghost" className="h-8 w-8">
              <Mic className="h-5 w-5" />
            </Button>
          </div>
          <Button
            type="submit"
            size="icon"
            className="rounded-lg"
            disabled={!inputText.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        {/* Текстовое поле ввода */}
        <Textarea
          ref={textareaRef}
          placeholder="Введите сообщение..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full resize-none rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 bg-black/30 text-slate-200 placeholder-slate-400 backdrop-blur-md"
          rows={1}
        />
      </form>
    </footer>
  );
};

export default InputArea;




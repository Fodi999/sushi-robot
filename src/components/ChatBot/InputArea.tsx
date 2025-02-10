// src/components/ChatBot/InputArea.tsx

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

interface InputAreaProps {
  inputText: string;
  setInputText: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const InputArea: React.FC<InputAreaProps> = ({ inputText, setInputText, onSubmit }) => {
  return (
    <footer className="border-t border-gray-700 p-4 sm:p-6">
      <form className="flex" onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Введите сообщение..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 border border-gray-700 rounded-l-lg px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 bg-black/30 text-gray-200 placeholder-gray-400 backdrop-blur-md"
        />
        <Button
          type="submit"
          className="ml-2 rounded-r-lg bg-gradient-to-r from-indigo-500 to-teal-400 p-2 sm:p-3 transition-colors duration-300"
        >
          <ArrowUp size={20} />
        </Button>
      </form>
    </footer>
  );
};

export default InputArea;
// src/components/ChatBot/Header.tsx

import React from "react";
import { ShoppingCart } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-500 to-teal-400 bg-opacity-95 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-between shadow-md border-b border-indigo-800">
      <span className="text-gray-900 text-xl sm:text-2xl font-semibold tracking-wide">
        SushiBot
      </span>
      <div className="flex items-center space-x-4">
        <ShoppingCart
          className="text-gray-600 cursor-pointer hover:text-gray-900 transition-colors duration-200"
          size={24}
        />
      </div>
    </header>
  );
};

export default Header;
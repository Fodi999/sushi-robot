"use client";

import { useEffect, useState } from "react";
import DashboardHeader from "./dashboard/DashboardHeader";
import SearchBar from "./dashboard/SearchBar";
import DashboardTabs from "./dashboard/DashboardTabs";
import { Guest, AutomationCardProps } from "./types";

export default function Dashboard({ guest }: { guest: Guest }) {
  const greeting = "Доброе утро";
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState<AutomationCardProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<AutomationCardProps["category"]>("суши");
  const [products, setProducts] = useState<AutomationCardProps[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://remote-marilee-fodifood-7bbeaaf7.koyeb.app//products");
        if (!res.ok) throw new Error("Ошибка получения товаров");
        const data: AutomationCardProps[] = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (prod) =>
      prod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (item: AutomationCardProps) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 p-6 space-y-8">
      <DashboardHeader guest={guest} greeting={greeting} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <DashboardTabs
        guest={guest}
        filteredProducts={filteredProducts}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        cartItems={cartItems}
        setCartItems={setCartItems} // Добавлен пропс setCartItems
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecommendedProducts from "@/components/dashboard/RecommendedProducts";
import ProfileSettings from "@/components/dashboard/ProfileSettings";
import Preferences from "@/components/dashboard/Preferences";
import Cart from "@/components/dashboard/Cart";
import OrdersStats from "@/components/dashboard/OrdersStats";
import Bonuses from "@/components/dashboard/Bonuses";
import OrderStatus from "@/components/dashboard/OrderStatus";
import Support from "@/components/dashboard/Support";
import Social from "@/components/dashboard/Social";
import { Guest, AutomationCardProps } from "../types";
import {
  Home,
  User,
  Settings,
  ShoppingCart,
  Box,
  CreditCard,
  Truck,
  HelpCircle,
  Share2,
} from "lucide-react";

interface DashboardTabsProps {
  guest: Guest;
  filteredProducts: AutomationCardProps[];
  selectedCategory: AutomationCardProps["category"];
  setSelectedCategory: (category: AutomationCardProps["category"]) => void;
  cartItems: AutomationCardProps[];
  setCartItems: (items: AutomationCardProps[]) => void;
  addToCart: (item: AutomationCardProps) => void;
  removeFromCart: (index: number) => void;
}

export default function DashboardTabs({
  guest,
  filteredProducts,
  selectedCategory,
  setSelectedCategory,
  cartItems,
  setCartItems,
  addToCart,
  removeFromCart,
}: DashboardTabsProps) {
  const categories: AutomationCardProps["category"][] = [
    "суши",
    "роллы",
    "сашими",
    "салаты",
    "закуски",
  ];

  const tabs = [
    { id: "home", label: "Главная", icon: Home },
    { id: "profile", label: "Профиль", icon: User },
    { id: "preferences", label: "Настройки", icon: Settings },
    {
      id: "cart",
      label: (
        <span className="flex items-center gap-1">
          Корзина
          {cartItems.length > 0 && (
            <span className="inline-flex items-center justify-center w-4 h-4 text-[0.65rem] font-semibold text-white bg-red-500 rounded-full">
              {cartItems.length}
            </span>
          )}
        </span>
      ),
      icon: ShoppingCart,
    },
    { id: "ordersStats", label: "Заказы", icon: Box },
    { id: "bonuses", label: "Бонусы", icon: CreditCard },
    { id: "orderStatus", label: "Статус", icon: Truck },
    { id: "support", label: "Поддержка", icon: HelpCircle },
    { id: "social", label: "Соцсети", icon: Share2 },
  ];

  return (
    <Tabs defaultValue="home" className="space-y-6">
      <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        <TabsList className="flex items-center justify-start gap-1 bg-transparent border-b border-gray-800 p-2 min-w-[700px] sm:min-w-0">
          {tabs.map(({ id, label, icon: Icon }) => (
            <TabsTrigger
              key={id}
              value={id}
              className="flex items-center gap-1 px-2 py-1 rounded-full text-[0.75rem] sm:text-[0.8rem] font-medium text-gray-300 transition-all hover:bg-gray-800 hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-700 data-[state=active]:to-gray-600 data-[state=active]:text-white data-[state=active]:shadow-md whitespace-nowrap"
            >
              <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <TabsContent value="home" className="space-y-4">
        <RecommendedProducts
          filteredProducts={filteredProducts}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          addToCart={addToCart}
          categories={categories}
        />
      </TabsContent>
      <TabsContent value="profile" className="space-y-4">
        <ProfileSettings guest={guest} />
      </TabsContent>
      <TabsContent value="preferences" className="space-y-4">
        <Preferences />
      </TabsContent>
      <TabsContent value="cart" className="space-y-4">
        <Cart
          guest={guest}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          setCartItems={setCartItems}
        />
      </TabsContent>
      <TabsContent value="ordersStats" className="space-y-4">
        <OrdersStats />
      </TabsContent>
      <TabsContent value="bonuses" className="space-y-4">
        <Bonuses />
      </TabsContent>
      <TabsContent value="orderStatus" className="space-y-4">
        <OrderStatus />
      </TabsContent>
      <TabsContent value="support" className="space-y-4">
        <Support guest={guest} />
      </TabsContent>
      <TabsContent value="social" className="space-y-4">
        <Social />
      </TabsContent>
    </Tabs>
  );
}









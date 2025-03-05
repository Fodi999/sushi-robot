"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { AutomationCardProps } from "../types";
import { useRouter } from "next/navigation";

interface CartProps {
  cartItems: AutomationCardProps[];
  removeFromCart: (index: number) => void;
  guest: { id: number; username: string };
  setCartItems: (items: AutomationCardProps[]) => void;
}

export default function Cart({ cartItems, removeFromCart, guest, setCartItems }: CartProps) {
  const router = useRouter();

  // Группировка и подсчёт количества товаров
  const groupedItems = cartItems.reduce((acc, item) => {
    const existing = acc.find((i) => i.id === item.id);
    if (existing) {
      existing.quantity++;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, [] as (AutomationCardProps & { quantity: number })[]);

  // Расчёт итогов
  const totalPrice = groupedItems.reduce(
    (sum, { price, quantity }) => sum + Number(price.replace("$", "")) * quantity,
    0
  );
  const totalCalories = groupedItems.reduce(
    (sum, { calories, quantity }) => sum + calories * quantity,
    0
  );

  // Оформление заказа
  const handleCheckout = async () => {
    const orderData = {
      guest_id: guest.id,
      product_ids: groupedItems.map((item) => item.id),
    };

    try {
      const res = await fetch("https://remote-marilee-fodifood-7bbeaaf7.koyeb.app/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });
      if (!res.ok) throw new Error("Не удалось оформить заказ");
      const order = await res.json();
      console.log("Заказ оформлен:", order);
      setCartItems([]);
      router.push("/order-confirmation");
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  return (
    <Card className="w-full  max-w-[1000px]  mx-auto bg-gradient-to-br from-gray-900 to-black text-gray-100 rounded-2xl shadow-lg overflow-hidden border border-gray-800">
      <CardHeader className="p-4">
        <CardTitle className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Корзина
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 space-y-5">
        {groupedItems.length === 0 ? (
          <div className="text-center py-6 bg-gray-800/30 rounded-xl">
            <p className="text-gray-400">Корзина пуста</p>
          </div>
        ) : (
          <>
            <ul className="space-y-3">
              {groupedItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {item.title} <span className="text-gray-400">×{item.quantity}</span>
                    </p>
                    <p className="text-xs text-gray-300">
                      ${Number(item.price.replace("$", "")) * item.quantity}
                    </p>
                    <p className="text-xs text-gray-400">
                      {item.calories * item.quantity} ккал
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(idx)}
                    className="text-gray-400 hover:text-red-400 hover:bg-gray-700/50 rounded-full p-2"
                  >
                    <Trash size={16} />
                  </Button>
                </li>
              ))}
            </ul>
            <div className="space-y-2 text-right">
              <p className="text-sm">
                Итого: <span className="font-semibold text-lg">${totalPrice.toFixed(2)}</span>
              </p>
              <p className="text-sm text-gray-300">
                Калории: <span className="font-semibold">{totalCalories} ккал</span>
              </p>
            </div>
          </>
        )}
        <Button
          onClick={handleCheckout}
          disabled={!groupedItems.length}
          className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium rounded-xl py-2.5 disabled:opacity-40 transition-all"
        >
          <ShoppingCart className="mr-2" size={18} />
          Оформить заказ
        </Button>
      </CardContent>
    </Card>
  );
}





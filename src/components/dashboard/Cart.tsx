import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash, ShoppingCart } from "lucide-react"; // Иконки Lucide
import { AutomationCardProps } from "../types";

interface CartProps {
  cartItems: AutomationCardProps[];
  removeFromCart: (index: number) => void;
}

export default function Cart({ cartItems, removeFromCart }: CartProps) {
  const totalPrice = cartItems.length > 0 ? "$XX.XX" : "$0.00"; // Здесь можно добавить реальный расчет суммы

  return (
    <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden max-w-lg mx-auto">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 tracking-tight">
          Ваша корзина
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        {cartItems.length === 0 ? (
          <p className="text-sm sm:text-base text-gray-400 italic text-center py-4 bg-gray-800/50 rounded-lg">
            Ваша корзина пуста
          </p>
        ) : (
          <div className="space-y-3">
            {cartItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-800/70 transition-colors duration-200"
              >
                <p className="text-sm sm:text-base text-gray-200 flex-1 truncate mr-2">
                  {item.title} — <span className="font-semibold text-white">{item.price}</span>
                </p>
                <Button
                  variant="outline"
                  onClick={() => removeFromCart(idx)}
                  className="text-sm bg-transparent border-gray-600 text-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-200 rounded-full px-4 py-1"
                >
                  <Trash className="mr-2" size={16} /> {/* Иконка для удаления */}
                  Удалить
                </Button>
              </div>
            ))}
            <p className="text-right text-sm sm:text-base font-semibold text-gray-200 mt-4">
              Итоговая сумма:{" "}
              <span className="text-lg sm:text-xl text-white">{totalPrice}</span>
            </p>
          </div>
        )}
        <Button
          className="w-full py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-md hover:shadow-lg rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={cartItems.length === 0}
        >
          <ShoppingCart className="mr-2" size={18} /> {/* Иконка для перехода к оформлению */}
          Перейти к оформлению
        </Button>
      </CardContent>
    </Card>
  );
}

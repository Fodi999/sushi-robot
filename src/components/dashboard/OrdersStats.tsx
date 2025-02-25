import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2 } from "lucide-react";

export default function OrdersStats() {
  const orderHistory = [
    { date: "2025-02-21", calories: 1200 },
    { date: "2025-02-20", calories: 950 },
    { date: "2025-02-19", calories: 1100 },
  ];
  const totalCaloriesDay = orderHistory.reduce((sum, order) => sum + order.calories, 0);
  const totalCaloriesWeek = totalCaloriesDay * 7;
  const totalCaloriesMonth = totalCaloriesDay * 30;

  return (
    <Card className="w-full max-w-[1000px] mx-auto bg-gradient-to-br from-gray-900 to-black text-gray-100 rounded-2xl shadow-lg overflow-hidden border border-gray-800 transition-all hover:shadow-xl">
      <CardHeader className="p-4 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-gray-300" />
          <CardTitle className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Заказы
          </CardTitle>
        </div>
        <span className="bg-gray-700 text-gray-200 text-xs font-medium px-2 py-1 rounded-full">
          Unpaid
        </span>
      </CardHeader>
      <CardContent className="p-5 space-y-5">
        <p className="text-sm text-gray-300">История заказов:</p>
        {orderHistory.length === 0 ? (
          <p className="text-sm text-gray-400 italic px-4 py-2 bg-gray-800/50 rounded-xl">
            Заказов пока нет
          </p>
        ) : (
          <div className="space-y-3">
            {orderHistory.map((order, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 p-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <p className="text-sm text-gray-200">
                  <span className="font-medium">Дата:</span> {order.date}
                </p>
                <p className="text-sm text-gray-200">
                  <span className="font-medium">Калории:</span> {order.calories}
                </p>
              </div>
            ))}
          </div>
        )}
        <div className="space-y-1 text-sm text-gray-300">
          <p className="font-medium">Сводка калорий:</p>
          <p>
            День: <span className="font-semibold text-white">{totalCaloriesDay}</span>
          </p>
          <p>
            Неделя: <span className="font-semibold text-white">{totalCaloriesWeek}</span>
          </p>
          <p>
            Месяц: <span className="font-semibold text-white">{totalCaloriesMonth}</span>
          </p>
        </div>
        <div className="flex justify-end pt-4">
          <button
            className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium rounded-xl px-4 py-2 transition-all shadow-md hover:shadow-lg"
          >
            Оплатить сейчас
          </button>
        </div>
      </CardContent>
    </Card>
  );
}




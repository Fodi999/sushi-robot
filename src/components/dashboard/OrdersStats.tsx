import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2 } from "lucide-react"; // Импортируем иконки

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
    <Card className="bg-gray-800 border-0 rounded-xl shadow-lg">
      <CardHeader className="border-b border-gray-700 pb-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BarChart2 className="text-gray-400 w-5 h-5" /> {/* Уменьшенный размер иконки */}
          <CardTitle className="text-xl sm:text-2xl font-semibold text-white">Заказы и калории</CardTitle>
        </div>
        <div className="bg-yellow-500 text-black text-xs py-1 px-2 rounded-full">
          Unpaid {/* Яркая метка */}
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-6 sm:p-8">
        <p className="text-sm sm:text-base text-gray-300">История заказов:</p>
        {orderHistory.length === 0 ? (
          <p className="text-sm sm:text-base text-gray-400">Заказы отсутствуют</p>
        ) : (
          orderHistory.map((order, idx) => (
            <div key={idx} className="bg-gray-700 p-4 rounded-lg shadow-sm hover:bg-gray-600 transition-colors">
              <p className="text-sm sm:text-base text-white">
                <strong>Дата:</strong> {order.date}
              </p>
              <p className="text-sm sm:text-base text-white">
                <strong>Калории:</strong> {order.calories}
              </p>
            </div>
          ))
        )}
        <div className="mt-6 space-y-2 text-sm sm:text-base text-gray-300">
          <p><strong>Сводка калорий:</strong></p>
          <p>За день: <span className="font-semibold">{totalCaloriesDay}</span></p>
          <p>За неделю: <span className="font-semibold">{totalCaloriesWeek}</span></p>
          <p>За месяц: <span className="font-semibold">{totalCaloriesMonth}</span></p>
        </div>
      </CardContent>
      <div className="mt-6 space-y-2 text-sm sm:text-base text-gray-300 flex justify-end p-6 sm:p-8">
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors">
          Pay out now {/* Кнопка с ярким желтым цветом */}
        </button>
      </div>
    </Card>
  );
}




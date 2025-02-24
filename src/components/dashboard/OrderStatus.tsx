import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react"; // Импортируем иконку для статуса

export default function OrderStatus() {
  return (
    <Card className="bg-gray-800 border-0 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="border-b border-gray-700 pb-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <CheckCircle className="text-green-500 w-5 h-5" /> {/* Иконка для статуса заказа */}
          <CardTitle className="text-xl sm:text-2xl font-semibold text-white">Статус заказа</CardTitle>
        </div>
        <div className="bg-yellow-500 text-black text-xs py-1 px-2 rounded-full">
          Unpaid {/* Яркая метка для статуса */}
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-6 sm:p-8">
        <p className="text-sm sm:text-base text-gray-300">
          Отслеживайте статус вашего текущего заказа и получайте уведомления.
        </p>
        <div className="flex justify-end">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors">
            Pay out now {/* Кнопка для действий */}
          </button>
        </div>
      </CardContent>
    </Card>
  );
}


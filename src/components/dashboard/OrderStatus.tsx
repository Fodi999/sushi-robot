import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function OrderStatus() {
  return (
    <Card className="w-full max-w-[1000px] mx-auto bg-gradient-to-br from-gray-900 to-black text-gray-100 rounded-2xl shadow-lg overflow-hidden border border-gray-800 transition-all hover:shadow-xl">
      <CardHeader className="p-4 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-gray-300" />
          <CardTitle className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Статус заказа
          </CardTitle>
        </div>
        <span className="bg-gray-700 text-gray-200 text-xs font-medium px-2 py-1 rounded-full">
          Unpaid
        </span>
      </CardHeader>
      <CardContent className="p-5 space-y-5">
        <p className="text-sm text-gray-300">
          Отслеживайте статус заказа и получайте уведомления
        </p>
        <div className="flex justify-end">
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


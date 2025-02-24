import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Edit, Settings } from "lucide-react"; // Иконки Lucide

export default function Bonuses() {
  return (
    <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden max-w-md mx-auto">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 tracking-tight">
          Бонусная программа
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        <p className="text-sm sm:text-base text-gray-300 flex items-center">
          <Lightbulb className="mr-2 text-green-400" /> {/* Иконка для первого пункта */}
          <span className="font-semibold text-white mr-2">Ваши бонусные баллы:</span>
          <strong className="text-lg sm:text-xl text-yellow-400">1234</strong>
        </p>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed flex items-center">
          <Edit className="mr-2 text-blue-400" /> {/* Иконка для второго пункта */}
          Доступные скидки и промокоды для ваших покупок.
        </p>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed flex items-center">
          <Settings className="mr-2 text-red-400" /> {/* Иконка для третьего пункта */}
          Управление бонусной программой.
        </p>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Edit, Settings } from "lucide-react";

export default function Bonuses() {
  return (
    <Card className="w-full max-w-[1000px] mx-auto bg-gradient-to-br from-gray-900 to-black text-gray-100 rounded-2xl shadow-lg overflow-hidden border border-gray-800 transition-all hover:shadow-xl">
      <CardHeader className="p-4 border-b border-gray-800">
        <CardTitle className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Бонусы
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 space-y-5">
        <div className="flex items-center gap-3">
          <Lightbulb className="h-5 w-5 text-gray-300" />
          <p className="text-sm text-gray-300">
            Баллы: <span className="font-semibold text-lg text-white">1234</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Edit className="h-5 w-5 text-gray-300" />
          <p className="text-sm text-gray-400">Скидки и промокоды для покупок</p>
        </div>
        <div className="flex items-center gap-3">
          <Settings className="h-5 w-5 text-gray-300" />
          <p className="text-sm text-gray-400">Управление программой</p>
        </div>
      </CardContent>
    </Card>
  );
}

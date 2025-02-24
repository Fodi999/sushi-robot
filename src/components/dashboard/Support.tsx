import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function Support() {
  return (
    <Card className="bg-gray-800 border-0 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <CardContent className="p-6 sm:p-8 text-center space-y-6">
        <MessageCircle className="h-12 w-12 sm:h-16 sm:w-16 mx-auto text-gray-200 transition-all duration-200 hover:text-white" />
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Нужна помощь?</h3>
        <p className="text-sm sm:text-base text-gray-400">
          Наша служба поддержки всегда рядом
        </p>
        <Button className="w-full text-sm sm:text-base bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-200">
          Начать чат
        </Button>
      </CardContent>
    </Card>
  );
}

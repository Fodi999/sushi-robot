import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Preferences() {
  return (
    <Card className="bg-gray-800 border-0 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="border-b border-gray-700 pb-4">
        <CardTitle className="text-xl sm:text-2xl font-semibold text-white">Предпочтения</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6 sm:p-8">
        {/* Диета */}
        <div className="space-y-2">
          <label className="text-sm sm:text-base text-gray-300">Диета</label>
          <Input
            placeholder="Введите вашу диету"
            className="bg-gray-700 text-white border-0 rounded-md p-3 text-sm sm:text-base focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
        </div>
        
        {/* Любимые ингредиенты */}
        <div className="space-y-2">
          <label className="text-sm sm:text-base text-gray-300">Любимые ингредиенты</label>
          <Input
            placeholder="Например: базилик, помидоры"
            className="bg-gray-700 text-white border-0 rounded-md p-3 text-sm sm:text-base focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
        </div>
        
        {/* Исключения */}
        <div className="space-y-2">
          <label className="text-sm sm:text-base text-gray-300">Исключения</label>
          <Input
            placeholder="Например: орехи, морепродукты"
            className="bg-gray-700 text-white border-0 rounded-md p-3 text-sm sm:text-base focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
        </div>
        
        {/* Предпочтения по времени приема пищи */}
        <div className="space-y-2">
          <label className="text-sm sm:text-base text-gray-300">Предпочтения по времени приема пищи</label>
          <Input
            placeholder="Например: завтрак, обед, ужин"
            className="bg-gray-700 text-white border-0 rounded-md p-3 text-sm sm:text-base focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
        </div>
        
        {/* Аллергии */}
        <div className="space-y-2">
          <label className="text-sm sm:text-base text-gray-300">Аллергии</label>
          <Input
            placeholder="Например: молоко, глютен"
            className="bg-gray-700 text-white border-0 rounded-md p-3 text-sm sm:text-base focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
        </div>
        
        {/* Предпочтения по специям */}
        <div className="space-y-2">
          <label className="text-sm sm:text-base text-gray-300">Предпочтения по специям</label>
          <Input
            placeholder="Например: перец, чеснок"
            className="bg-gray-700 text-white border-0 rounded-md p-3 text-sm sm:text-base focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
        </div>
        
        {/* Кнопка сохранения */}
        <Button className="w-full mt-6 text-sm sm:text-base bg-yellow-500 hover:bg-yellow-400 text-black rounded-md py-3 transition-colors duration-200">
          Сохранить предпочтения
        </Button>
      </CardContent>
    </Card>
  );
}



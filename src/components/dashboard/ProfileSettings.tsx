import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Guest } from "../types";

export default function ProfileSettings({ guest }: { guest: Guest }) {
  return (
    <Card className="bg-gray-800 border-0 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="border-b border-gray-700 pb-4">
        <CardTitle className="text-xl sm:text-2xl font-semibold text-white">Настройки профиля</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6 sm:p-8">
        {/* Имя */}
        <div className="space-y-2">
          <label className="text-sm sm:text-base text-gray-300">Имя</label>
          <Input
            defaultValue={guest.username}
            className="bg-gray-700 text-white border-0 rounded-md p-3 text-sm sm:text-base focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
        </div>
        
        {/* Телефон */}
        <div className="space-y-2">
          <label className="text-sm sm:text-base text-gray-300">Телефон</label>
          <Input
            defaultValue={guest.phone}
            className="bg-gray-700 text-white border-0 rounded-md p-3 text-sm sm:text-base focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
        </div>
        
        {/* Адрес */}
        <div className="space-y-2">
          <label className="text-sm sm:text-base text-gray-300">Адрес</label>
          <Input
            placeholder="Ваш адрес"
            className="bg-gray-700 text-white border-0 rounded-md p-3 text-sm sm:text-base focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
        </div>
        
        {/* Сменить пароль */}
        <div className="space-y-2">
          <label className="text-sm sm:text-base text-gray-300">Сменить пароль</label>
          <Input
            type="password"
            placeholder="Новый пароль"
            className="bg-gray-700 text-white border-0 rounded-md p-3 text-sm sm:text-base focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
        </div>
        
        {/* Кнопка сохранения */}
        <Button className="w-full mt-6 text-sm sm:text-base bg-yellow-500 hover:bg-yellow-400 text-black rounded-md py-3 transition-colors duration-200">
          Сохранить изменения
        </Button>
      </CardContent>
    </Card>
  );
}


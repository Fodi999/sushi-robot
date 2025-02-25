import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Guest } from "../types";

export default function ProfileSettings({ guest }: { guest: Guest }) {
  return (
    <Card className="w-full  max-w-[1000px]  mx-auto bg-gradient-to-br from-gray-900 to-black text-gray-100 rounded-2xl shadow-lg overflow-hidden border border-gray-800 transition-all hover:shadow-xl">
      <CardHeader className="p-4 border-b border-gray-800">
        <CardTitle className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Профиль
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 space-y-5">
        {/* Имя */}
        <div className="space-y-1">
          <label className="text-sm text-gray-300">Имя</label>
          <Input
            defaultValue={guest.username}
            className="bg-gray-800 text-white border-gray-700 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Телефон */}
        <div className="space-y-1">
          <label className="text-sm text-gray-300">Телефон</label>
          <Input
            defaultValue={guest.phone || ""}
            className="bg-gray-800 text-white border-gray-700 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Адрес */}
        <div className="space-y-1">
          <label className="text-sm text-gray-300">Адрес</label>
          <Input
            placeholder="Введите адрес"
            className="bg-gray-800 text-white border-gray-700 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Новый пароль */}
        <div className="space-y-1">
          <label className="text-sm text-gray-300">Новый пароль</label>
          <Input
            type="password"
            placeholder="Введите новый пароль"
            className="bg-gray-800 text-white border-gray-700 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Кнопка сохранения */}
        <Button
          className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium rounded-xl py-2.5 mt-6 transition-all shadow-md hover:shadow-lg"
        >
          Сохранить
        </Button>
      </CardContent>
    </Card>
  );
}


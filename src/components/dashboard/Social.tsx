import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, LogIn } from "lucide-react";

export default function Social() {
  return (
    <div className="space-y-6">
      {/* Поделиться заказами */}
      <Card className="w-full  max-w-[1000px] mx-auto bg-gradient-to-br from-gray-900 to-black text-gray-100 rounded-2xl shadow-lg overflow-hidden border border-gray-800 transition-all hover:shadow-xl">
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Поделиться
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5 space-y-4">
          <p className="text-sm text-gray-300">
            Поделитесь заказами или избранным в соцсетях:
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              className="flex-1 min-w-[120px] bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl py-2 transition-all shadow-md hover:shadow-lg"
            >
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </Button>
            <Button
              className="flex-1 min-w-[120px] bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-xl py-2 transition-all shadow-md hover:shadow-lg"
            >
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </Button>
            <Button
              className="flex-1 min-w-[120px] bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-medium rounded-xl py-2 transition-all shadow-md hover:shadow-lg"
            >
              <Instagram className="w-4 h-4 mr-2" />
              VK
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Вход через социальные сети */}
      <Card className="w-full  max-w-[1000px] mx-auto bg-gradient-to-br from-gray-900 to-black text-gray-100 rounded-2xl shadow-lg overflow-hidden border border-gray-800 transition-all hover:shadow-xl">
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Войти
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5 space-y-4">
          <p className="text-sm text-gray-300">
            Используйте соцсети для входа:
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              className="flex-1 min-w-[120px] bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl py-2 transition-all shadow-md hover:shadow-lg"
            >
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </Button>
            <Button
              className="flex-1 min-w-[120px] bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl py-2 transition-all shadow-md hover:shadow-lg"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Google
            </Button>
            <Button
              className="flex-1 min-w-[120px] bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-xl py-2 transition-all shadow-md hover:shadow-lg"
            >
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}




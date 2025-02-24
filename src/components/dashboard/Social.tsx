import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, LogIn } from "lucide-react"; // Заменяем Google на LogIn

export default function Social() {
  return (
    <>
      {/* Поделиться заказами */}
      <Card className="bg-gray-800 border-0 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl font-semibold text-white">Поделиться заказами / избранным</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-6 sm:p-8">
          <p className="text-sm sm:text-base text-gray-300">
            Поделитесь своими заказами или избранными товарами в социальных сетях:
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
            >
              <Facebook className="w-5 h-5 mr-2" />
              Facebook
            </Button>
            <Button
              variant="outline"
              className="bg-sky-500 hover:bg-sky-600 text-white text-sm sm:text-base py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
            >
              <Twitter className="w-5 h-5 mr-2" />
              Twitter
            </Button>
            <Button
              variant="outline"
              className="bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
            >
              <Instagram className="w-5 h-5 mr-2" />
              VK
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Вход через социальные сети */}
      <Card className="bg-gray-800 border-0 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-6">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl font-semibold text-white">Вход через социальные сети</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-6 sm:p-8">
          <p className="text-sm sm:text-base text-gray-300">Войдите с помощью вашего социального аккаунта:</p>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
            >
              <Facebook className="w-5 h-5 mr-2" />
              Facebook
            </Button>
            <Button
              variant="outline"
              className="bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
            >
              <LogIn className="w-5 h-5 mr-2" /> {/* Заменяем Google на LogIn */}
              Google
            </Button>
            <Button
              variant="outline"
              className="bg-sky-500 hover:bg-sky-600 text-white text-sm sm:text-base py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
            >
              <Twitter className="w-5 h-5 mr-2" />
              Twitter
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}



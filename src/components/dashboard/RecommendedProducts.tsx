import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Dumbbell } from "lucide-react";
import AutomationCard from "../AutomationCard";
import { AutomationCardProps } from "../types";

interface RecommendedProductsProps {
  filteredProducts: AutomationCardProps[];
  selectedCategory: AutomationCardProps["category"];
  setSelectedCategory: (category: AutomationCardProps["category"]) => void;
  addToCart: (item: AutomationCardProps) => void;
  categories: AutomationCardProps["category"][];
}

export default function RecommendedProducts({
  filteredProducts,
  selectedCategory,
  setSelectedCategory,
  addToCart,
  categories,
}: RecommendedProductsProps) {
  const recommendedProducts = filteredProducts.filter((prod) => prod.category === selectedCategory);

  return (
    <>
      {/* Карточки с рекомендациями */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="p-3 bg-gray-800/50 rounded-full mb-4">
              <Coffee className="h-10 w-10 text-gray-200" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">Сегодняшний заказ еды</h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">Рекомендации по утреннему режиму</p>
            <Button
              variant="outline"
              className="w-full py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white border-none hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-md hover:shadow-lg rounded-lg"
            >
              Сформировать
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="p-3 bg-gray-700/50 rounded-full mb-4">
              <Dumbbell className="h-10 w-10 text-gray-200" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">Идеи домашней тренировки</h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">Для поддержания формы</p>
            <Button
              variant="outline"
              className="w-full py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white border-none hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-md hover:shadow-lg rounded-lg"
            >
              Сформировать
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Рекомендуемые товары */}
      <div className="space-y-6 mt-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 tracking-wide">
          Рекомендуемые товары
        </h2>
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-4 min-w-max">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-gray-600 to-gray-800 text-white scale-105"
                    : "bg-gray-900 text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white hover:border-gray-500"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex space-x-6 overflow-x-auto py-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900">
          {recommendedProducts.length === 0 ? (
            <p className="text-sm text-gray-400 italic px-4 py-2 bg-gray-800/50 rounded-lg">Нет товаров в выбранной категории</p>
          ) : (
            recommendedProducts.map((prod, index) => (
              <div
                key={prod.id}
                className="flex-shrink-0 w-80 transform hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <AutomationCard
                  {...prod}
                  priority={index === 0}
                  onAddToCart={() => addToCart(prod)}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

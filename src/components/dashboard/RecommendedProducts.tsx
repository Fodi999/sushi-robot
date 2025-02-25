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
    <div className="space-y-8">
      {/* Карточки с рекомендациями */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
          <CardContent className="p-5 flex flex-col items-center text-center space-y-4">
            <div className="p-2 bg-gray-800/70 rounded-full">
              <Coffee className="h-8 w-8 text-gray-200" />
            </div>
            <h3 className="text-lg font-semibold text-white">Еда на сегодня</h3>
            <p className="text-xs text-gray-400">Утренние рекомендации</p>
            <Button
              className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium rounded-xl py-2 transition-all shadow-md hover:shadow-lg"
            >
              Сформировать
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
          <CardContent className="p-5 flex flex-col items-center text-center space-y-4">
            <div className="p-2 bg-gray-800/70 rounded-full">
              <Dumbbell className="h-8 w-8 text-gray-200" />
            </div>
            <h3 className="text-lg font-semibold text-white">Тренировка дома</h3>
            <p className="text-xs text-gray-400">Для хорошей формы</p>
            <Button
              className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium rounded-xl py-2 transition-all shadow-md hover:shadow-lg"
            >
              Сформировать
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Рекомендуемые товары */}
      <div className="space-y-5">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Рекомендации
        </h2>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow-md"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>
        <div className="flex gap-6 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {recommendedProducts.length === 0 ? (
            <p className="text-sm text-gray-400 italic px-4 py-2 bg-gray-800/50 rounded-xl">
              Товаров в этой категории нет
            </p>
          ) : (
            recommendedProducts.map((prod, index) => (
              <div
                key={prod.id}
                className="flex-shrink-0 w-72 transform hover:scale-105 transition-all duration-300"
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
    </div>
  );
}

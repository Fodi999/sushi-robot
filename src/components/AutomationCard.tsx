import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { AutomationCardProps } from "./types";

export default function AutomationCard({
  title,
  description,
  image_url,
  price,
  calories,
  category,
  priority = false,
  onAddToCart,
}: AutomationCardProps) {
  void category;
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="max-w-md overflow-hidden bg-gradient-to-b from-black to-gray-900 text-white shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden group">
        <Image
          src={image_url || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
          className="object-cover transition-transform group-hover:scale-105"
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 ${
            isLiked 
              ? "bg-red-500/90 hover:bg-red-600 shadow-md" 
              : "bg-gray-800/80 hover:bg-gray-700 backdrop-blur-sm"
          }`}
          aria-label={isLiked ? "Unlike" : "Like"}
        >
          <Heart
            className={`w-5 h-5 transition-transform duration-200 ${
              isLiked 
                ? "fill-white stroke-white scale-110" 
                : "fill-none stroke-gray-300 hover:stroke-white"
            }`}
          />
        </button>
      </div>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold tracking-tight mb-2 text-white">{title}</h2>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <div className="flex justify-between items-center text-sm mb-2">
          <span className="font-medium text-gray-200">Количество калорий:</span>
          <span className="text-gray-100">{calories} kcal</span>
        </div>
        <div className="flex justify-between items-center text-lg font-semibold">
          <span className="text-gray-200">Цена:</span>
          <span className="text-white">{price}</span>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button 
          onClick={onAddToCart} 
          className="w-full bg-gradient-to-r from-gray-100 to-gray-300 text-black font-semibold py-2 px-4 rounded-lg hover:from-gray-200 hover:to-gray-400 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          size="lg"
        >
          Добавить в корзину
        </Button>
      </CardFooter>
    </Card>
  );
}
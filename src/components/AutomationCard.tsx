"use client";

import { motion, AnimatePresence } from "framer-motion";
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

  // Варианты анимации для карточки
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  // Варианты анимации для кнопки Like
  const likeVariants = {
    liked: { scale: 1.2, rotate: 10, transition: { duration: 0.2 } },
    unliked: { scale: 1, rotate: 0, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        layout
      >
        <Card className="max-w-md overflow-hidden bg-gradient-to-b from-black to-gray-900 text-white shadow-lg rounded-2xl border border-gray-800">
          <div className="relative aspect-[16/10] overflow-hidden group">
            <Image
              src={image_url || "/placeholder.svg"}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={priority}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <motion.button
              onClick={() => setIsLiked(!isLiked)}
              className={`absolute top-4 right-4 p-2 rounded-full transition-colors duration-200 ${
                isLiked
                  ? "bg-red-500/90 hover:bg-red-600 shadow-md"
                  : "bg-gray-800/80 hover:bg-gray-700 backdrop-blur-sm"
              }`}
              aria-label={isLiked ? "Unlike" : "Like"}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                variants={likeVariants}
                animate={isLiked ? "liked" : "unliked"}
              >
                <Heart
                  className={`w-5 h-5 ${
                    isLiked
                      ? "fill-white stroke-white"
                      : "fill-none stroke-gray-300 hover:stroke-white"
                  }`}
                />
              </motion.div>
            </motion.button>
          </div>
          <CardContent className="p-5">
            <h2 className="text-xl font-semibold tracking-tight mb-2 text-white">{title}</h2>
            <p className="text-sm text-gray-300 mb-4">{description}</p>
            <div className="flex justify-between items-center text-sm mb-2">
              <span className="font-medium text-gray-200">Калории:</span>
              <span className="text-gray-100">{calories} kcal</span>
            </div>
            <div className="flex justify-between items-center text-lg font-semibold">
              <span className="text-gray-200">Цена:</span>
              <span className="text-white">{price}</span>
            </div>
          </CardContent>
          <CardFooter className="px-5 pb-5 pt-0">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                onClick={onAddToCart}
                className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium py-2 rounded-xl transition-all shadow-md hover:shadow-lg"
                size="lg"
              >
                Добавить в корзину
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
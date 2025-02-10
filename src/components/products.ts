// src/components/products.ts

import { SushiProduct } from "@/types"; // Если типы определены в types/index.ts
// Или: import { SushiProduct } from "../types";  (в зависимости от настроек алиасов)

export function getProducts(): SushiProduct[] {
  const product1: SushiProduct = {
    id: 1,
    image: "https://i.postimg.cc/htp3f5d2/000002.webp",
    url: "https://i.postimg.cc/htp3f5d2/000002.webp",
    name: "Суши 1",
    description: "Описание продукта 1",
    price: "500",
  };

  const product2: SushiProduct = {
    id: 2,
    image: "https://i.postimg.cc/DzNjc45s/000003.webp",
    url: "https://i.postimg.cc/DzNjc45s/000003.webp",
    name: "Суши 2",
    description: "Описание продукта 2",
    price: "600",
  };

  const product3: SushiProduct = {
    id: 3,
    image: "https://i.postimg.cc/TwWkN2Hs/000004.webp",
    url: "https://i.postimg.cc/TwWkN2Hs/000004.webp",
    name: "Суши 3",
    description: "Описание продукта 3",
    price: "700",
  };

  const product4: SushiProduct = {
    id: 4,
    image: "https://i.postimg.cc/7Lht7n1w/000005.jpg",
    url: "https://i.postimg.cc/7Lht7n1w/000005.jpg",
    name: "Суши 4",
    description: "Описание продукта 4",
    price: "800",
  };

  const product5: SushiProduct = {
    id: 5,
    image: "https://i.postimg.cc/QCGf2L2d/000005.webp",
    url: "https://i.postimg.cc/QCGf2L2d/000005.webp",
    name: "Суши 5",
    description: "Описание продукта 5",
    price: "900",
  };

  return [product1, product2, product3, product4, product5];
}
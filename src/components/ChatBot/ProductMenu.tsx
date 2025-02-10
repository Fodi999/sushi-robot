
import React from "react";
import Image from "next/image";
import { SushiProduct } from "@/types";

interface ProductMenuProps {
  products: SushiProduct[];
  onProductClick: (product: SushiProduct) => void;
}

const ProductMenu: React.FC<ProductMenuProps> = ({ products, onProductClick }) => {
  return (
    <div className="menu-options p-6 bg-transparent rounded-xl shadow-lg mb-2 -mt-4">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Sushi:</h3>
      {/* Контейнер для горизонтальной прокрутки */}
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => onProductClick(product)}
            className="flex-shrink-0 flex items-center justify-center rounded-full p-2 hover:scale-105 transition-transform"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={80}
              height={80}
              style={{ width: "80px", height: "80px" }}
              priority
              className="object-cover rounded-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductMenu;

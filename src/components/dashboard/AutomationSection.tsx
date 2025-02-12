import React, { useState } from "react";
import Image from "next/image";

interface AutomationCard {
  title: string;
  description: string;
  image_url: string;
  price: string;
  bg_class: string;
  text_class: string;
}

const defaultCards: AutomationCard[] = [
  {
    title: "Automation Item 1",
    description: "This is the first automation item.",
    image_url: "https://i.postimg.cc/htp3f5d2/000002.webp",
    price: "$10",
    bg_class: "bg-gray-800",
    text_class: "text-white",
  },
  {
    title: "Automation Item 2",
    description: "This is the second automation item.",
    image_url: "https://i.postimg.cc/DzNjc45s/000003.webp",
    price: "$20",
    bg_class: "bg-gray-700",
    text_class: "text-white",
  },
  {
    title: "Automation Item 3",
    description: "This is the third automation item.",
    image_url: "https://i.postimg.cc/TwWkN2Hs/000004.webp",
    price: "$30",
    bg_class: "bg-gray-600",
    text_class: "text-white",
  },
  {
    title: "Automation Item 4",
    description: "This is the fourth automation item.",
    image_url: "https://i.postimg.cc/7Lht7n1w/000005.jpg",
    price: "$40",
    bg_class: "bg-gray-500",
    text_class: "text-white",
  },
  {
    title: "Automation Item 5",
    description: "This is the fifth automation item.",
    image_url: "https://i.postimg.cc/QCGf2L2d/000005.webp",
    price: "$50",
    bg_class: "bg-gray-400",
    text_class: "text-white",
  },
];

const AutomationSection: React.FC = () => {
  const [cards] = useState<AutomationCard[]>(defaultCards);
  const [error] = useState<string>("");

  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold">Automation</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex gap-4 mt-4 overflow-x-auto scrollbar-hide">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`min-w-[240px] p-4 ${card.bg_class} ${card.text_class} rounded-2xl shadow-md flex flex-col`}
          >
            <Image
              src={card.image_url}
              alt={card.title}
              width={240}
              height={160}
              className="object-cover rounded-md mb-4"
            />
            <p className="text-lg font-semibold">{card.title}</p>
            <p className="text-sm text-gray-500">{card.description}</p>
            <p className="mt-2 font-bold">{card.price}</p>
            <button className="w-full mt-4 py-2 bg-black text-white rounded-full">
              В корзину
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutomationSection;

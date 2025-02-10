// src/types/index.ts
export type SushiProduct = {
    id: number;
    image: string;
    url: string;
    name: string;
    description: string;
    price: string;
  };
  
  export type Message = {
    id: string;
    text: string;
    isBot: boolean;
    timestamp: number;
  };
  
  
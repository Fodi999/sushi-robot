export interface Guest {
    id: number;
    username: string;
    email: string;
    password: string;
    phone: string;
  }
  
  export interface AutomationCardProps {
    id?: number;
    title: string;
    description: string;
    image_url: string;
    price: string;
    calories: number;
    category: "суши" | "роллы" | "сашими" | "салаты" | "закуски";
    priority?: boolean;
    onAddToCart?: () => void;
  }
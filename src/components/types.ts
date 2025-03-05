export interface Guest {
  id: number;
  username: string;
  email: string;
  password: string;
  phone: string;
  first_name?: string;    // Опционально, соответствует Go FirstName
  address?: string;       // Опционально, так как может быть NULL
  birth_date?: string;    // Опционально, строка для time.Time в JSON
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
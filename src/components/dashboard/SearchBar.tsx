import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 transition-all duration-200 hover:text-white" />
      <Input
        placeholder="Поиск товаров..."
        className="pl-10 bg-gray-800 text-white border-0 rounded-md shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none transition-all duration-200"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

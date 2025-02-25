import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 transition-colors hover:text-gray-200" />
      <Input
        placeholder="Поиск товаров..."
        className="pl-10 pr-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all shadow-md hover:shadow-lg"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

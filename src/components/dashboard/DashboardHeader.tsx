import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Guest } from "../types";

interface DashboardHeaderProps {
  guest: Guest;
  greeting: string;
}

export default function DashboardHeader({ guest, greeting }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 pb-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg">
      <div className="space-y-2 px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 tracking-tight leading-tight">
          {greeting},<br className="sm:hidden" />
          {guest.username}
        </h1>
        <p className="text-sm sm:text-base text-gray-400 opacity-90 font-medium">{guest.email}</p>
      </div>
      <div className="flex items-center space-x-4">
       
        <Avatar className="mt-4 sm:mt-0 h-12 w-12 sm:h-16 sm:w-16 border-4 border-gray-700 hover:border-gray-600 transition-all duration-300 rounded-full shadow-md hover:shadow-xl mx-6">
          <AvatarImage
            src="/feis 1.png" // Заменен URL на локальный путь из public/
            className="object-cover"
          />
          <AvatarFallback className="bg-gray-700 text-white text-xl sm:text-2xl font-semibold">
            {guest.username.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

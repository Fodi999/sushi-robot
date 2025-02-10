import React from "react";


const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 p-4 sm:p-6 flex items-center justify-between shadow-md border-b border-slate-800">
      <span className="text-slate-200 text-xl sm:text-2xl font-semibold tracking-wide">
        SushiBot
      </span>
 
    </header>
  );
};

export default Header;

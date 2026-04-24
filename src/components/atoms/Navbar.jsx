import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 h-16 bg-white border-b border-slate-100 shadow-sm">
      <div className="flex items-center gap-4">
        <button className="active:opacity-70 transition-opacity hover:bg-slate-50 p-2 rounded-full">
          <span className="material-symbols-outlined text-[#434654]">menu</span>
        </button>
        <span className="text-2xl font-bold tracking-tighter text-[#002b92] font-['Inter']">Lumina</span>
      </div>
      <div className="flex items-center gap-2">
        <button className="active:opacity-70 transition-opacity hover:bg-slate-50 p-2 rounded-full relative">
          <span className="material-symbols-outlined text-[#434654]">shopping_cart</span>
          <span className="absolute top-1 right-1 w-4 h-4 bg-[#a04100] text-white text-[10px] font-bold flex items-center justify-center rounded-full">2</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

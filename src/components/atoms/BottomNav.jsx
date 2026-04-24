import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pt-2 pb-safe px-4 bg-white/90 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] h-16">
      <Link className="flex flex-col items-center justify-center text-[#003ec7] scale-105 transition-transform" to="/">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        <span className="text-[11px] font-bold uppercase tracking-wider">Home</span>
      </Link>
      <button className="flex flex-col items-center justify-center text-[#737688] hover:text-[#003ec7]">
        <span className="material-symbols-outlined">grid_view</span>
        <span className="text-[11px] font-bold uppercase tracking-wider">Categories</span>
      </button>
      <button className="flex flex-col items-center justify-center text-[#737688] hover:text-[#003ec7]">
        <span className="material-symbols-outlined">favorite</span>
        <span className="text-[11px] font-bold uppercase tracking-wider">Saved</span>
      </button>
      <Link className="flex flex-col items-center justify-center text-[#737688] hover:text-[#003ec7]" to="/login">
        <span className="material-symbols-outlined">person</span>
        <span className="text-[11px] font-bold uppercase tracking-wider">Profile</span>
      </Link>
    </nav>
  );
};

export default BottomNav;

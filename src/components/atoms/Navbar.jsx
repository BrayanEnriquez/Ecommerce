import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  const itemCount = cart.reduce((acc, item) => acc + item.cantidadSeleccionada, 0);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 h-16 bg-white border-b border-slate-100 shadow-sm">
      <div className="flex items-center gap-4">
        <button className="active:opacity-70 transition-opacity hover:bg-slate-50 p-2 rounded-full">
          <span className="material-symbols-outlined text-[#434654]">menu</span>
        </button>
        <Link to="/" className="text-2xl font-bold tracking-tighter text-[#002b92] font-['Inter']">
          Lumina
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Link
          to="/cart"
          className="active:opacity-70 transition-opacity hover:bg-slate-50 p-2 rounded-full relative block"
        >
          <span className="material-symbols-outlined text-[#434654]">shopping_cart</span>
          {itemCount > 0 && (
            <span className="absolute top-1 right-1 min-w-[16px] h-4 px-1 bg-[#fe6b00] text-white text-[9px] font-bold flex items-center justify-center rounded-full animate-in zoom-in duration-300">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

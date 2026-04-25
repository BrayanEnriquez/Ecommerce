import React from 'react';

const ProductCard = ({ Nombre, Precio, Referencia, Categoria, Estado, Cantidad, onAddToCart }) => {
  const product = { Nombre, Precio, Referencia, Categoria, Estado, Cantidad };
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-slate-100 group transition-transform hover:scale-[1.02]">
      <div className="relative aspect-square">
        <img
          alt={Nombre}
          className="w-full h-full object-cover"
          src={Referencia}
        />
        {/* Estado Badge */}
        {Estado && (
          <div className="absolute top-2 left-2 bg-[#003ec7] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
            {Estado}
          </div>
        )}
        <button className="absolute top-2 right-2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors">
          <span className="material-symbols-outlined text-xl">favorite</span>
        </button>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-[#003ec7] uppercase tracking-tighter">{Categoria}</span>
          {Cantidad !== undefined && (
            <span className="text-[9px] font-medium text-[#747686]">Stock: {Cantidad}</span>
          )}
        </div>
        <h3 className="text-sm font-semibold text-[#1a1b23] line-clamp-1 mt-1">{Nombre}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-base font-bold text-[#1a1b23]">${Precio}</span>
          <button
            onClick={() => onAddToCart && onAddToCart(product)}
            className="bg-[#f3f2fe] p-1.5 rounded-lg text-[#003ec7] hover:bg-[#003ec7] hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

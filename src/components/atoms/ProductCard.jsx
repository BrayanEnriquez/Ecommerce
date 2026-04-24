import React from 'react';

const ProductCard = ({ title, price, image, category, rating }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-slate-100 group transition-transform hover:scale-[1.02]">
      <div className="relative aspect-square">
        <img
          alt={title}
          className="w-full h-full object-cover"
          src={image}
        />
        <button className="absolute top-2 right-2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors">
          <span className="material-symbols-outlined text-xl">favorite</span>
        </button>
      </div>
      <div className="p-3">
        <span className="text-[10px] font-bold text-[#003ec7] uppercase tracking-tighter">{category}</span>
        <h3 className="text-sm font-semibold text-[#1a1b23] line-clamp-1 mt-1">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-base font-bold text-[#1a1b23]">${price}</span>
          <div className="flex items-center">
            <span className="material-symbols-outlined text-sm text-[#a04100]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="text-[10px] font-bold text-[#434654] ml-0.5">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

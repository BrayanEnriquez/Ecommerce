import React from 'react';

const CategoryItem = ({ icon, label, isActive, onClick }) => {
  return (
    <div
      className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group"
      onClick={onClick}
    >
      <div className={`w-16 h-16 rounded-full shadow-sm border flex items-center justify-center transition-all group-hover:scale-105 ${isActive
        ? "bg-[#003ec7] border-[#003ec7] text-white"
        : "bg-white border-slate-100 text-[#003ec7]"
        }`}>
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <span className={`text-[12px] font-bold transition-colors ${isActive ? "text-[#003ec7]" : "text-[#434656]"
        }`}>
        {label}
      </span>
    </div>
  );
};

export default CategoryItem;

import React from 'react';

const CategoryItem = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center gap-2 flex-shrink-0">
      <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
        <span className="material-symbols-outlined text-[#003ec7] text-3xl">{icon}</span>
      </div>
      <span className="text-[12px] font-medium text-[#434656]">{label}</span>
    </div>
  );
};

export default CategoryItem;

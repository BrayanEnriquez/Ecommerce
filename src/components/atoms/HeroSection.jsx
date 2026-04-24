import React from 'react';

const HeroSection = () => {
  return (
    <section className="px-4 pt-4">
      <div className="relative w-full h-[420px] rounded-xl overflow-hidden bg-[#d3e4fe]">
        <img
          alt="E-commerce Lifestyle"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGqnXJBXfMlNfgOCdLq4hrYmAPZs6kwRFu09O9MgjSEg4hcAXK4OL0mT3UCcXTXAno-dWsXNm6qlmNb84W_ze1JJOOnayODGPlYOVoszyCa_rL6WINyJJbJMmzdKa4XwxqXmD7moJIEua1t5kEbaWvPqST_h9R52Gqg8DI8THBD_X13QxPfCNWlqZwurGtXyhlFW5S1F3pAtzr1KdjTB7xJ0Yp5fpxjiQKRHB_s6XEUDN9zma_gvTxzESx1O-N2fsbgSzXiGs2t4Q"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c30]/80 to-transparent flex flex-col justify-center px-8">
          <h1 className="text-white text-4xl font-bold max-w-[280px] mb-4 font-['Inter']">Elevate Your Everyday Style</h1>
          <p className="text-white/90 text-base mb-8 max-w-[320px]">Experience premium curation and frictionless shopping with Lumina's newest collection.</p>
          <button className="bg-[#a04100] text-white px-8 py-3 rounded-lg font-bold w-fit active:opacity-90 shadow-lg transition-transform hover:scale-[1.02]">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

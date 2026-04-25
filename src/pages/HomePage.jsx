import React from 'react';
import Navbar from '../components/atoms/Navbar';
import BottomNav from '../components/atoms/BottomNav';
import HeroSection from '../components/atoms/HeroSection';
import CategoryItem from '../components/atoms/CategoryItem';
import ProductCard from '../components/atoms/ProductCard';
import Button from '../components/atoms/Button';

const HomePage = () => {
  const categories = [
    { icon: 'devices', label: 'Electronics' },
    { icon: 'checkroom', label: 'Clothing' },
    { icon: 'chair', label: 'Home' },
    { icon: 'fitness_center', label: 'Sports' },
    { icon: 'watch', label: 'Accessories' }
  ];

  const products = [
    {
      title: 'Lumina Chrono Series',
      price: '249.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDq6Ufe16g29lJLoBaJxCnTEKt2Rw9xHN4Un0dJRJR2eDKAWmU2cVV971-KcaBKKkAYyRb_NPbO_QtPaebuXum-8Knt7m-GieHwtjnEH9NnVJKfcawl2sp98d7hiktwKnIR-AHrgMV7Vk3ATE6U0zr02Bk3n8MvISZev-sPg6AzrhSqKJR2BSgCxtif0PhCwP5tZzcQglcgKEzJR8mjPlXFcprUbIxpo2uSMj_LKsXuuegD2e0YCXftxcezlCW7-eqWSPdxO2uwYZ4',
      category: 'Electronics',
      rating: '4.8'
    },
    {
      title: 'Vortex Kinetic Runner',
      price: '120.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-tcozOud7lXM8pB33Kq4cu5PQnZOBxD3t-gpafX_jNwZBqaRDRHKl_eotvFZ-GxtmZs1Rj5EysJMu45fKNsitRifTKAx-4H2cYsuBYn7XlkeYdv397xQ8sZKAItxZAV2jXBW_w3gQmVAP9PfYTYQatD5XIwd8CdP-9QrKvLRbQL6buF9Wdub5TrgNNCazNk9K63_kX-Y1cQHLfiGOtvYeRTJCq930lU_nq9pKz7fRXjj7RPqEaY49T6ICut_GWwyTgxG8WDdA0wM',
      category: 'Clothing',
      rating: '4.9'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9ff] font-['Inter']">
      <Navbar />

      <main className="pt-16 pb-24">
        <HeroSection />

        {/* Login Access Point */}
        <section className="px-4 mt-8">
          <div className="bg-[#d3e4fe] rounded-xl p-4 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#0b1c30]">Welcome to Lumina</span>
              <span className="text-sm text-[#434656]">Sign in for a personalized experience</span>
            </div>
            <div className="flex gap-2">
              <Button
                to="/login"
                text="Login"
                variant="outline"
                className="!py-2 !px-4 !w-auto"
              />
              <Button
                text="Join Now"
                variant="primary"
                className="!py-2 !px-4 !w-auto"
              />
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="mt-8">
          <div className="px-4 flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#0b1c30]">Featured Categories</h2>
            <button className="text-[#003ec7] text-xs font-bold">View All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar px-4 py-2">
            {categories.map((cat, i) => (
              <CategoryItem key={i} icon={cat.icon} label={cat.label} />
            ))}
          </div>
        </section>

        {/* New Arrivals */}
        <section className="mt-8 px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#0b1c30]">New Arrivals</h2>
            <span className="bg-[#bf3003] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">Trending</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {products.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </section>

        {/* Discover More */}
        <section className="mt-8 px-4 pb-8">
          <h2 className="text-xl font-bold text-[#0b1c30] mb-4">Discover More</h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[300px]">
            <div className="bg-[#003ec7] rounded-xl p-4 flex flex-col justify-end relative overflow-hidden row-span-2">
              <img
                alt="Headphones"
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPc4V3zBuKCpgTGNyGD6iYJLX2j9t6HQ3CdwXcKcQVkRFIUaignQIHecKibzf43oh10wSbfgKW4WFYT9NbJdIvGHEk2zngoQHLUAN7o9lcc6wWNtt7H1COhfz7k28C5dSf_0yHCimWOKKv571_e4KyL0qx0hfiwvxJz5zylZVecXP4-Bw9H_odke2u77W2sciKUMS4ymi7gLFyD0XnMLhEmGoxX1RqcQI6ND0CpsyFe7ii3EVZs6H3F7x7-Bg4mxc9m-T5ojf-Mo8"
              />
              <div className="relative z-10">
                <span className="text-white text-lg font-bold">Tech Essentials</span>
                <p className="text-[#dfe3ff] text-[11px] mt-1">Up to 40% OFF</p>
              </div>
            </div>
            <div className="bg-[#fe6b00] rounded-xl p-4 flex flex-col justify-center items-center text-center">
              <span className="material-symbols-outlined text-white text-3xl mb-1">local_fire_department</span>
              <span className="text-white text-xs font-bold">Daily Deals</span>
            </div>
            <div className="bg-[#d3e4fe] rounded-xl p-4 flex flex-col justify-between overflow-hidden relative">
              <div className="z-10">
                <span className="text-[#434656] text-xs font-bold">Eco Friendly</span>
              </div>
              <span className="material-symbols-outlined absolute -bottom-2 -right-2 text-6xl text-[#434656]/10">eco</span>
            </div>
          </div>
        </section>
      </main>

      <BottomNav />

      {/* FAB */}
      <button className="fixed bottom-20 right-4 w-14 h-14 bg-[#003ec7] text-white rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform z-40">
        <span className="material-symbols-outlined text-2xl">search</span>
      </button>
    </div>
  );
};

export default HomePage;

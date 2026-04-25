import React, { useEffect, useState } from "react"
import Navbar from '../components/atoms/Navbar';
import BottomNav from '../components/atoms/BottomNav';
import HeroSection from '../components/atoms/HeroSection';
import CategoryItem from '../components/atoms/CategoryItem';
import ProductCard from '../components/atoms/ProductCard';
import Button from '../components/atoms/Button';
import AddToCartModal from '../components/atoms/AddToCartModal';
import { fireStoreDb } from "../back/firestore.js"
import { getDocs, collection } from "firebase/firestore"
import { logout } from "../back/auth.js"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()

  const [productos, setProductos] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { icon: 'apps', label: 'All' },
    { icon: 'computer', label: 'PC' },
    { icon: 'chair', label: 'Hogar' },
    { icon: 'category', label: 'Otros' }
  ];

  const getProductos = async () => {
    const fireStoreDocs = await getDocs(collection(fireStoreDb, "productos"));
    setProductos([...fireStoreDocs.docs.map(doc => doc.data())])
  }

  useEffect(() => {
    getProductos()
  }, [])

  const filteredProducts = productos.filter(producto => {
    const matchesCategory = selectedCategory === "All" || producto.Categoria === selectedCategory;
    const matchesSearch = producto.Nombre.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    setSearchQuery(searchTerm);
  };

  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchTerm("");
    setSearchQuery("");
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const localLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-[#f8f9ff] font-['Inter']">
      <Navbar />

      <main className="pt-16 pb-24">
        <HeroSection />

        {/* Search Bar Section */}
        <section className="mt-8 px-4">
          <form
            onSubmit={handleSearch}
            className="flex gap-2 bg-white p-2 rounded-xl shadow-sm border border-slate-100"
          >
            <div className="flex-1 flex items-center gap-2 px-2">
              <span className="material-symbols-outlined text-slate-400">search</span>
              <input
                type="text"
                placeholder="¿Qué estás buscando?"
                className="w-full outline-none text-sm text-[#1a1b23] bg-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-[#003ec7] hover:bg-[#fe6b00] text-white px-4 py-2 rounded-lg text-xs font-bold active:scale-95 transition-all duration-300 shadow-md hover:shadow-orange-500/20"
            >
              Buscar
            </button>
          </form>
        </section>

        {/* Filter Categories */}
        <section className="mt-8">
          <div className="px-4 flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#0b1c30]">Filter</h2>
            <button
              onClick={resetFilters}
              className="text-[#003ec7] text-xs font-bold"
            >
              Reset
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar px-4 py-2">
            {categories.map((cat, i) => (
              <CategoryItem
                key={i}
                icon={cat.icon}
                label={cat.label}
                isActive={selectedCategory === cat.label}
                onClick={() => setSelectedCategory(cat.label)}
              />
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="mt-8 px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#0b1c30]">
              {searchQuery ? `Resultados para "${searchQuery}"` : (selectedCategory === "All" ? "New Arrivals" : selectedCategory)}
            </h2>
            <span className="bg-[#bf3003] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
              {filteredProducts.length} Items
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {filteredProducts.map((producto, i) => (
              <ProductCard
                key={i}
                {...producto}
                onAddToCart={openModal}
              />
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

      <AddToCartModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <BottomNav />

      {/* FAB */}
      <button className="fixed bottom-20 right-4 w-14 h-14 bg-[#003ec7] text-white rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform z-40">
        <span className="material-symbols-outlined text-2xl">search</span>
      </button>
    </div>
  );
};

export default HomePage;

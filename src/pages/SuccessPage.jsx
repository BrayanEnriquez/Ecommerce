import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/atoms/Navbar';
import BottomNav from '../components/atoms/BottomNav';

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f9ff] font-['Inter']">
      <Navbar />

      <main className="pt-32 pb-32 px-4 flex flex-col items-center justify-center text-center max-w-lg mx-auto">
        <div className="w-24 h-24 bg-[#e5f9f1] rounded-full flex items-center justify-center mb-8 animate-in zoom-in duration-500">
          <span className="material-symbols-outlined text-6xl text-[#00a86b]">check_circle</span>
        </div>

        <h1 className="text-3xl font-black text-[#1a1b23] mb-4">¡Gracias por tu compra!</h1>
        <p className="text-[#747686] text-sm leading-relaxed mb-8">
          Hemos recibido tu pedido correctamente.<br />
          Te hemos enviado un correo de confirmación con los detalles de tu envío y el número de seguimiento.
        </p>

        <div className="w-full space-y-3">
          <button
            onClick={() => navigate('/')}
            className="w-full bg-[#003ec7] text-white py-4 rounded-2xl font-bold text-sm shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
          >
            Seguir Comprando
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-white text-[#434654] py-4 rounded-2xl font-bold text-sm border border-slate-100 active:scale-95 transition-all"
          >
            Ver Mis Pedidos
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default SuccessPage;

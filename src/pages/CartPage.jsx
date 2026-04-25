import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import Navbar from '../components/atoms/Navbar';
import BottomNav from '../components/atoms/BottomNav';

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart, clearCart } = useCartStore();

  const subtotal = cart.reduce((acc, item) => acc + (parseFloat(item.Precio) * item.cantidadSeleccionada), 0);
  const shipping = subtotal > 0 ? 15000 : 0; // Ejemplo: 15k de envío
  const total = subtotal + shipping;

  const handleUpdateQuantity = (item, delta) => {
    const newQty = item.cantidadSeleccionada + delta;
    if (newQty <= 0) {
      removeFromCart(item.Nombre);
    } else if (newQty <= (item.Cantidad || 99)) {
      // Usamos addToCart con el delta
      addToCart(item, delta);
    }
  };

  const handleCheckout = () => {
    // Aquí podrías guardar en Firebase si quisieras, por ahora limpiamos y redirigimos
    clearCart();
    navigate('/success');
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] font-['Inter']">
      <Navbar />

      <main className="pt-20 pb-32 px-4 max-w-lg mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm text-[#434654]"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-2xl font-black text-[#1a1b23]">Tu Carrito</h1>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-slate-100 mt-10">
            <div className="w-20 h-20 bg-[#f3f2fe] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-4xl text-[#003ec7]">shopping_cart_off</span>
            </div>
            <h2 className="text-lg font-bold text-[#1a1b23] mb-2">Tu carrito está vacío</h2>
            <p className="text-sm text-[#747686] mb-6">¡Parece que aún no has agregado nada!</p>
            <button
              onClick={() => navigate('/')}
              className="bg-[#003ec7] text-white px-8 py-3 rounded-xl font-bold text-sm active:scale-95 transition-transform"
            >
              Explorar Productos
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Items List */}
            <div className="space-y-3">
              {cart.map((item, index) => (
                <div key={index} className="bg-white p-3 rounded-2xl flex gap-3 shadow-sm border border-slate-50">
                  <div className="w-20 h-20 bg-[#f8f9ff] rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={item.Referencia}
                      alt={item.Nombre}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                      <h3 className="text-sm font-bold text-[#1a1b23] line-clamp-1">{item.Nombre}</h3>
                      <p className="text-[11px] text-[#747686]">{item.Categoria}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-[#003ec7]">${parseFloat(item.Precio).toLocaleString()}</span>

                      <div className="flex items-center gap-3 bg-[#f8f9ff] px-2 py-1 rounded-lg">
                        <button
                          onClick={() => handleUpdateQuantity(item, -1)}
                          className="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-sm text-[#003ec7]"
                        >
                          <span className="material-symbols-outlined text-xs">remove</span>
                        </button>
                        <span className="text-xs font-bold text-[#1a1b23] w-3 text-center">{item.cantidadSeleccionada}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item, 1)}
                          className="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-sm text-[#003ec7]"
                        >
                          <span className="material-symbols-outlined text-xs">add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mt-8">
              <h3 className="text-base font-bold text-[#1a1b23] mb-4">Resumen de Orden</h3>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#747686]">Subtotal</span>
                  <span className="font-bold text-[#1a1b23]">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#747686]">Envío</span>
                  <span className="font-bold text-[#1a1b23]">${shipping.toLocaleString()}</span>
                </div>
                <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-base font-bold text-[#1a1b23]">Total</span>
                  <span className="text-xl font-black text-[#003ec7]">${total.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 p-3 bg-[#f3f2fe] rounded-xl flex items-center gap-3">
                <span className="material-symbols-outlined text-[#003ec7]">local_offer</span>
                <p className="text-[11px] text-[#434654]">
                  ¡Agrega <span className="font-bold text-[#003ec7]">$20,000</span> más para envío gratis!
                </p>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-[#fe6b00] hover:bg-[#e05e00] text-white py-4 rounded-2xl font-black text-sm mt-6 shadow-lg shadow-orange-500/20 active:scale-95 transition-all"
              >
                Pagar Ahora
              </button>
            </div>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default CartPage;

import React, { useState, useEffect } from 'react';
import { useCartStore } from '../../store/useCartStore';

const AddToCartModal = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  // Reiniciar la cantidad a 1 cada vez que cambie el producto o se abra el modal
  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
    }
  }, [product, isOpen]);

  if (!isOpen || !product) return null;

  const unitPrice = parseFloat(product.Precio) || 0;
  const subtotal = unitPrice * quantity;

  const handleConfirm = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-bold text-[#1a1b23]">{product.Nombre}</h2>
              <p className="text-sm text-[#747686]">{product.Categoria}</p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="space-y-4">
            {/* Price Info */}
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-sm text-[#434654]">Valor por unidad</span>
              <span className="font-bold text-[#1a1b23]">${unitPrice.toLocaleString()}</span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#434654]">Cantidad</span>
              <div className="flex items-center gap-4 bg-[#f3f2fe] p-1 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center bg-white rounded-md text-[#003ec7] shadow-sm disabled:opacity-50"
                  disabled={quantity <= 1}
                >
                  <span className="material-symbols-outlined text-sm">remove</span>
                </button>
                <span className="font-bold text-[#003ec7] w-4 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.Cantidad || 99, quantity + 1))}
                  className="w-8 h-8 flex items-center justify-center bg-white rounded-md text-[#003ec7] shadow-sm disabled:opacity-50"
                  disabled={quantity >= (product.Cantidad || 99)}
                >
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
            </div>

            {/* Subtotal */}
            <div className="bg-[#f8f9ff] p-4 rounded-xl flex justify-between items-center">
              <span className="text-xs font-bold text-[#434654] uppercase tracking-widest">Subtotal</span>
              <span className="text-xl font-black text-[#003ec7]">${subtotal.toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 text-sm font-bold text-[#747686] hover:bg-slate-50 rounded-xl transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleConfirm}
              className="flex-2 py-3 bg-[#003ec7] text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;

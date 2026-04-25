import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],

  // Agregar al carrito o actualizar cantidad si ya existe
  addToCart: (product, quantity) => set((state) => {
    const existingProduct = state.cart.find(item => item.Nombre === product.Nombre);

    if (existingProduct) {
      return {
        cart: state.cart.map(item =>
          item.Nombre === product.Nombre
            ? { ...item, cantidadSeleccionada: item.cantidadSeleccionada + quantity }
            : item
        )
      };
    }

    return {
      cart: [...state.cart, { ...product, cantidadSeleccionada: quantity }]
    };
  }),

  // Eliminar un producto
  removeFromCart: (productName) => set((state) => ({
    cart: state.cart.filter(item => item.Nombre !== productName)
  })),

  // Limpiar todo el carrito
  clearCart: () => set({ cart: [] }),
}));

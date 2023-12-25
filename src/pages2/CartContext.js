// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Logic to add product to cart
    
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    // Logic to remove product from cart
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const incrementP=(productid)=>{
    const updatedItems = cartItems.map((item) =>
      item.id === productid ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  }

  const decrementP=(productid)=>{
    const updatedItems = cartItems.map((item) =>
    item.id === productid && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
  );
    setCartItems(updatedItems);
  }
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,incrementP ,decrementP,setCartItems}}>
      {children}
    </CartContext.Provider>
  );
};

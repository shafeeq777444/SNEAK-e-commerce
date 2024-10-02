import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQuantity, 0) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      // Adjust this condition if you have properties like size or color
      const itemExists = prev.find((item) => item.name === product.name);
  
      if (itemExists) {
        // If the product exists, increment the quantity
        return prev.map((item) =>
          item.name=== product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add the new product to the cart with quantity 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

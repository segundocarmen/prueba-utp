import React, { createContext, useState } from "react";
export const DataContext = createContext();

const cart = [];

export const ContextProvider = ({ children }) => {
  const [currentCart, setCurrentCart] = useState(cart);

  const changeCart = (values) => {
    setCurrentCart(values);
  };

  return (
    <DataContext.Provider
      value={{
        cart: currentCart,
        changeCart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

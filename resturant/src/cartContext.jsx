import { createContext } from "react";

export const CartContext = createContext({
  cart: [],
  setCart: () => {},
  total: 0,
});

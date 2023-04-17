import React from "react";
import {  Routes, Route } from "react-router-dom";  
import NavBar from "./component/NavBar";
import { CartContext } from "./cartContext";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Contact from "./pages/Contact";
import FoodMenu from "./component/FoodMenu";
import Cart from "./component/Cart";

function App() {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        addToCart,
      }}
    >
          <NavBar />
          {/* <FoodMenu/> */}
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/cart" element={<Cart/>} />

        
        </Routes>
        {/* <Footer/> */}
    </CartContext.Provider>
  );
}

export default App;

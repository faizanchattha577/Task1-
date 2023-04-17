import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Contact from "./pages/Contact";
import FoodMenu from "./component/FoodMenu";
import Cart from "./component/Cart";

function App() {
  return (
    <>
      <NavBar />
      {/* <FoodMenu/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;

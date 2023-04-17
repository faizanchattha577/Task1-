import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const { cart, total } = useContext(CartContext);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://marketplace.canva.com/EAE9407gQAE/1/0/1600w/canva-rose-gold-photography-circle-logo-9uq8B--Pjcs.jpg"
                alt="Logo"
              />
            </div>
            <div className="hidden md:block  ">
              <div className="flex flex-row ">
                <div className="justify-between">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      href="/"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </a>
                    <a
                      href="/about"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      About
                    </a>
                    <a
                      href="/services"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Services
                    </a>
                    <a
                      href="/contact"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contact
                    </a>
                  </div>
                </div>
                <a className="justify-end flex">
                  <Link
                    to="/cart"
                    className="bg-[#1F2937]  hover:bg-[#1F2937] text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                    
                    }}
                  >
                    <CartIcon />
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

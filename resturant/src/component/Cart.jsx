import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart.items);


  const total = cart.reduce((acc, item) => acc + item.price, 0);
  //add item by adding plus

  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.map((item) => (
        <div className="flex justify-between items-center mb-4">
          <p> {item.title}</p>
          <img
            src={item.src}
            alt={item.title}
            className="w-20 h-20 object-cover"
          />
          <p> {item.price}</p>
        </div>
      ))}
      <div className="border-b mb-4 pb-4"></div>
      <div className="flex justify-between">
        <div className="font-bold">Total Price</div>
        <div className="font-bold"> {total}</div>
      </div>
    </div>
  );
}

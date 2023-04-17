import React from "react";
import star from "../assets/star.svg";
import starHalfFill from "../assets/star-half-fill.svg";
import starNoFill from "../assets/star-no-fill.svg";
import heart from "../assets/love.svg";
import eye from "../assets/eye.svg";
import { addItemToCart } from "../store/slices/CartSlice";
import { useDispatch } from "react-redux";

export default function Card({ menu }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(menu));
  };

  return (
    <div>
      <div className="ml-3 mr-3">
        <div className="card mt-3 mb-4 ">
          <img
            className="w-auto h-auto  object-cover"
            src={menu.src}
            alt="error"
          />
          <div className="p-5 flex-col gap-3">
            <div className="p-5 flex-col gap-3 ">
              <div className="flex items-center   gap-2">
                <span className="badge">In Stock</span>
                <span className="badge"> Ready To Serve</span>
              </div>
            </div>
            <h1 className="product-title " title="Best Ham-Burger">
              {menu.title}
            </h1>

            <div>
              <span className="text-xl font-bold">{menu.price}</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm line-through opacity-50">
                  {menu.fullprice}
                </span>
                <span className="discount-percent ">{menu.discount}</span>
              </div>
            </div>
            <div>
              <span className="flex items-center  mt-1">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={starHalfFill} />
                <img src={starNoFill} />
                <span className="text-xs ml-2 text-gray-500">
                  {menu.rating}
                </span>
              </span>
            </div>

            <div className="mt-5 flex gap-2">
              <button className="btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="button-icon">
                <img className="opacity-50 " src={heart} alt="" />
              </button>
              <button className="button-icon">
                <img className="opacity-50 " src={eye} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

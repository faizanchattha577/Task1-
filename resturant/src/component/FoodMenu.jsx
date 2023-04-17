import React from "react";
import Card from "./Card";
import menu from "../features/Menu";

function FoodMenu() {
  return (
    <div className="grid grid-col-3">
      <div className="h-full  flex flex-wrap justify-between bg-gray-100  items-center ">
        {menu?.map((menu) => (
          <Card key={menu.id} menu={menu} />
        ))}
      </div>
    </div>
  );
}

export default FoodMenu;

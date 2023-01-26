import React, { useContext } from "react";
import BasketComponent from "../components/BasketComponent";
import { StateContext } from "../context";

function Basket() {
  const { state } = useContext(StateContext);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {state.basket.map((basketProd) => (
          <BasketComponent key={basketProd.id} {...basketProd} />
        ))}
      </div>
    </div>
  );
}

export default Basket;

import React, { useContext, useState } from "react";
import { StateContext } from "../context";

function Product({ name, image, price, id, item }) {
  const [count, setCount] = useState(1);
  const { state, dispatch } = useContext(StateContext);
  const addToBasket = () => {
    const payload = {
      ...item,
      count,
    };
    const check = state.basket.some((item) => item.id === id);
    if (check) alert("bu oldin qoshilgan");
    else dispatch({ type: "ADD_TO_BASKET", payload: payload });
  };
  const minusBtn = () => {
    if (count > 1) setCount((p) => p - 1);
    else setCount(1);
  };
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  console.log(state.basket);
  return (
    <div className="bg-yellow-500 p-2 rounded">
      <p>{id}</p>
      <img className="w-full h-80 rounded" src={image} alt="product" />
      <h1 className="text-2xl font-medium">{name}</h1>
      <h2 className="text-xl">{price} $</h2>
      <div className="flex justify-between">
        <div className="">
          <button
            className="px-1 bg-sky-600 rounded-l text-white"
            onClick={minusBtn}
          >
            -
          </button>
          <input
            className="w-5 outline-none"
            value={count}
            type="text"
            onChange={handleChange}
          />
          <button
            className="px-1 bg-sky-600 rounded-r text-white"
            onClick={() => setCount((p) => p + 1)}
          >
            +
          </button>
        </div>
        <button
          className="py-1 px-2 bg-sky-600 rounded text-white"
          onClick={addToBasket}
        >
          Add to basket
        </button>
      </div>
    </div>
  );
}

export default Product;

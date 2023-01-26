import React, { useEffect, useState } from "react";

function BasketComponent({ name, image, price, count, setCount }) {
  const [countBasket, setCountBasket] = useState([count]);

  const minusBtn = () => {
    if (countBasket > 1) setCountBasket((p) => p - 1);
    else setCountBasket(1);
  };
  const handleChange = (e) => {
    setCountBasket(e.target.value);
  };
  useEffect(() => {
    setCountBasket(count);
  }, []);
  const overall = countBasket * price;
  return (
    <div className="bg-green-700 rounded p-3 text-white">
      <img
        className="w-full h-80 rounded cursor-pointer"
        src={image}
        alt="product"
      />
      <h1 className="text-2xl">{name}</h1>
      <p className="underline">{price} $</p>
      <p>quantity: {countBasket}</p>
      <div className="">
        <button
          className="px-1 bg-sky-600 rounded-l text-white"
          onClick={minusBtn}
        >
          -
        </button>
        <input
          className="w-5 outline-none text-black"
          value={countBasket}
          type="text"
          onChange={handleChange}
        />
        <button
          className="px-1 bg-sky-600 rounded-r text-white"
          onClick={() => setCountBasket((p) => p + 1)}
        >
          +
        </button>
      </div>
      <span>overAll: {overall} $</span>
    </div>
  );
}

export default BasketComponent;

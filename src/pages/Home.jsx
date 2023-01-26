import React from "react";
import Product from "../components/Product";

function Home() {
  const data = [
    {
      name: "iPhone 11",
      image:
        "https://images.macrumors.com/t/l027YnVeSc4qDitchQFTM6UjtOk=/800x0/smart/article-new/2019/09/iphone11prolineup.jpg?lossy",
      price: 600,
      id: 1,
    },
    {
      name: "iPhone 12",
      image:
        "https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg",
      price: 800,
      id: 2,
    },
    {
      name: "iPhone 13",
      image: "https://www.ixbt.com/img/x780x600/r30/00/02/45/67/cover.jpg",
      price: 1000,
      id: 3,
    },
    {
      name: "iPhone 14",
      image: "https://www.ixbt.com/img/x780x600/r30/00/02/56/75/cover.jpg",
      price: 1400,
      id: 4,
    },
  ];
  return (
    <div className="p-5">
      <div className="grid grid-cols-4 gap-5">
        {data.map((item) => (
          <Product key={item.id} item={item} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;

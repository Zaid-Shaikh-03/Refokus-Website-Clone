import React from "react";
import Product from "./Product";

function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,vero laudantium temporibus quod atque dolorum aliquam earum!",
      live: false,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,vero laudantium temporibus quod atque dolorum aliquam earum!",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,vero laudantium temporibus quod atque dolorum aliquam earum!",
      live: true,
      case: true,
    },
    {
      title: "yahoo",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,vero laudantium temporibus quod atque dolorum aliquam earum!",
      live: true,
      case: false,
    },
  ];

  return (
    <div className="bg-zinc-900 pt-32">
      {products.map((elem, index) => (
        <Product val={elem} />
      ))}
    </div>
  );
}

export default Products;

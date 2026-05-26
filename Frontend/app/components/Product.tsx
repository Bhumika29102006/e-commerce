// components/Product.tsx

"use client";

import { useState } from "react";

type Props = {
  item: {
    image: string;
    title: string;
    price: string;
    oldPrice: string;
    badge?: string;
  };
};

export default function ProductCard({
  item,
}: Props) {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {

    if (count > 0) {
      setCount(count - 1);
    }

  };

  return (
    <div className="productCard">

      {/* IMAGE */}

      <div className="imageBox">

        {item.badge && (
          <span className="badge">
            {item.badge}
          </span>
        )}

        <img
          src={item.image}
          alt={item.title}
        />

      </div>

      {/* CONTENT */}

      <div className="productContent">

        <h2>{item.title}</h2>

        <div className="priceRow">

          <span className="oldPrice">
            {item.oldPrice}
          </span>

          <span className="newPrice">
            {item.price}
          </span>

        </div>

        {/* QUANTITY */}

        <div className="quantityBox">

          <button onClick={decrease}>
            -
          </button>

          <span>{count}</span>

          <button onClick={increase}>
            +
          </button>

        </div>

      </div>

    </div>
  );
}
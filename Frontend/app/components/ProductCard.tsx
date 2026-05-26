// app/components/ProductCard.tsx

"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductCard({
  item,
  addToCart,
}: any) {

  const [count, setCount] = useState(1);

  const handleAddToCart = () => {

    addToCart({
      ...item,
      quantity: count,
    });

  };

  return (
    <div className="productListCard">

      <Image
        src={item.image}
        alt=""
        width={250}
        height={250}
        className="listImage"
      />

      <h2>{item.title}</h2>

      <p>${item.price}</p>

      {/* ===== QUANTITY ===== */}

      <div className="quantityBox">

        <button
          onClick={() =>
            count > 1 &&
            setCount(count - 1)
          }
        >
          -
        </button>

        <span>{count}</span>

        <button
          onClick={() =>
            setCount(count + 1)
          }
        >
          +
        </button>

      </div>

      {/* ===== ADD TO CART ===== */}

      <button
        className="addBtn"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>

    </div>
  );
}
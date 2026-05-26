// components/NewArrivalCard.tsx

import Image from "next/image";

export default function NewArrivalCard({ item }: any) {
  return (
    <div className="arrivalCard">

      <div className="arrivalImageBox">

        <Image
          src={item.image}
          alt=""
          width={300}
          height={300}
          className="arrivalImage"
        />

        <span className="arrivalBadge">
          {item.badge}
        </span>

      </div>

      <div className="colorDots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <h3>{item.title}</h3>

      <div className="arrivalPrice">

        <span className="arrivalOldPrice">
          {item.oldPrice}
        </span>

        <span className="arrivalNewPrice">
          {item.price}
        </span>

      </div>

      <div className="cartButtons">

        <button className="smallIcon">
          ♡
        </button>

        <button className="cartBtn">
          Add to Cart
        </button>

        <button className="smallIcon">
          👁
        </button>

      </div>

    </div>
  );
}
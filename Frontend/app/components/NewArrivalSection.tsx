// components/NewArrivalSection.tsx

import NewArrivalCard from "./NewArrivalCard";

export default function NewArrivalSection() {
  const products = [
    {
      image: "/n1.png",
      title: "Stylish Bracelet",
      price: "$30.00",
      oldPrice: "$60.00",
      badge: "50% OFF",
    },

    {
      image: "/n2.png",
      title: "Nike Sports Shoe",
      price: "$80.00",
      oldPrice: "$95.00",
      badge: "15% OFF",
    },

    {
      image: "/n3.png",
      title: "Men Denim Jacket",
      price: "$40.00",
      oldPrice: "$70.00",
      badge: "30% OFF",
    },

    {
      image: "/n4.png",
      title: "Fashion Dress",
      price: "$100.00",
      oldPrice: "$150.00",
      badge: "50% OFF",
    },
  ];

  return (
    <section className="arrivalSection">
      <div className="arrivalTop">

        <div>
          <p className="arrivalSmall">
            🧺 This Week’s
          </p>

          <h1>New Arrivals</h1>
        </div>

        <div className="arrivalButtons">
          <button>←</button>
          <button>→</button>
        </div>

      </div>

      <div className="arrivalGrid">
        {products.map((item, index) => (
          <NewArrivalCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
// components/ExploreProducts.tsx

import Image from "next/image";

const products = [
  {
    title: "Leather Jacket",
    price: "$29.99",
    oldPrice: "$49.99",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700&q=80",
    discount: "20% Off",
  },

  {
    title: "Men's Stylish Hat",
    price: "$25.00",
    oldPrice: "$35.99",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&q=80",
    discount: "",
  },

  {
    title: "Women's Stylish Hat",
    price: "$29.99",
    oldPrice: "$49.99",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&q=80",
    discount: "20% Off",
  },

  {
    title: "Solid A Line Dress",
    price: "$100.00",
    oldPrice: "$150.00",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=700&q=80",
    discount: "",
  },
];

export default function ExploreProducts() {
  return (
    <section className="exploreSection">

      <div className="exploreTop">

        <div>
          <p className="exploreTag">
            🧺 Our Products
          </p>

          <h1>Explore our Products</h1>
        </div>

        <div className="exploreButtons">
          <button>←</button>
          <button>→</button>
        </div>

      </div>

      <div className="exploreGrid">

        {products.map((item, index) => (
          <div className="exploreCard" key={index}>

            <div className="imageBox">

              {item.discount && (
                <div className="offerBadge">
                  {item.discount}
                </div>
              )}

              <Image
                src={item.image}
                alt="product"
                width={320}
                height={420}
                className="exploreImage"
                unoptimized
              />

              <div className="hoverOptions">

                <button className="iconBtn">
                  👁
                </button>

                <button className="selectBtn">
                  Select Option
                </button>

                <button className="iconBtn">
                  ♡
                </button>

              </div>

            </div>

            <div className="exploreContent">

              <h3>{item.title}</h3>

              <div className="priceRow">

                <span className="explorePrice">
                  {item.price}
                </span>

                <span className="exploreOldPrice">
                  {item.oldPrice}
                </span>

              </div>

              {(index === 1 || index === 2) && (
                <div className="colorDots">

                  <span className="dot activeDot"></span>

                  <span className="dot blueDot"></span>

                  <span className="dot greenDot"></span>

                </div>
              )}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
// components/ProductSection.tsx

import ProductCard from "./Product";

export default function ProductSection() {
  const products = [
    {
      image: "/p6.png",
      title: "Leather Jacket",
      price: "$29.99",
      oldPrice: "$49.99",
      badge: "20% Off",
    },
    {
      image: "/p7.png",
      title: "Men's Stylish Hat",
      price: "$25.00",
      oldPrice: "$35.99",
      button: true,
    },
    {
      image: "/p8.png",
      title: "Women's Stylish Hat",
      price: "$29.99",
      oldPrice: "$49.99",
      badge: "20% Off",
    },
    {
      image: "/p9.png",
      title: "Solid A Line Dress",
      price: "$100.00",
      oldPrice: "$150.00",
    },
  ];

  return (
    <section className="productSection">
      <div className="topArea">
        <div>
          <p className="smallTitle">🧺 Our Products</p>
          <h1>Explore our Products</h1>
        </div>

        <div className="arrowButtons">
          <button>←</button>
          <button>→</button>
        </div>
      </div>

      <div className="productGrid">
        {products.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
        
      </div>
    </section>
  );
}
// components/BestSellers.tsx

export default function BestSellers() {

  const products = [

    {
      image: "/shirt1.png",
      title: "Full Sleev Tshirt",
      price: "$29.99",
      oldPrice: "$49.99",
      reviews: "(64)",
    },

    {
      image: "/hoodie1.png",
      title: "Comfort Unisex Hoodie",
      price: "$29.99",
      oldPrice: "$49.99",
      reviews: "(44)",
    },

    {
      image: "/hoodie2.png",
      title: "Stylish Hoddie",
      price: "$29.99",
      oldPrice: "$49.99",
      reviews: "(60)",
    },

    {
      image: "/shirt2.png",
      title: "Sky Blue T-shirt",
      price: "$29.99",
      oldPrice: "$49.99",
      reviews: "(22)",
    },

  ];

  return (
    <section className="bestSellerSection">

      {/* TOP */}

      <div className="sellerTop">

        <div>

          <p className="sellerTag">
            🧺 This Month
          </p>

          <h1>
            Best Sellers
          </h1>

        </div>

        <div className="sellerArrows">

          <button>←</button>

          <button>→</button>

        </div>

      </div>

      {/* PRODUCTS */}

      <div className="sellerProducts">

        {products.map((item, index) => (

          <div className="sellerCard" key={index}>

            {/* CART ICON */}

            <div className="cartIcon">
              🛒
            </div>

            {/* CARD */}

            <div className="sellerBox">

              <h3>
                {item.title}
              </h3>

              {/* PRICE */}

              <div className="sellerPrices">

                <span className="newPrice">
                  {item.price}
                </span>

                <span className="oldPrice">
                  {item.oldPrice}
                </span>

              </div>

              {/* STARS */}

              <div className="reviews">

                ⭐⭐⭐⭐⭐

                <span>
                  {item.reviews}
                </span>

              </div>

            </div>

            {/* PRODUCT IMAGE */}

            <img
              src={item.image}
              alt=""
              className="sellerImage"
            />

          </div>

        ))}

      </div>

    </section>
  );
}
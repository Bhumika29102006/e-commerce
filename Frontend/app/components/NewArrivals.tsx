// components/NewArrivals.tsx

export default function NewArrivals() {

  const products = [

    {
      image: "/p4.png",
      discount: "20% OFF",
      name: "Top Handle Handbag",
      oldPrice: "$80",
      newPrice: "$60",
    },

    {
      image: "/p3.png",
      discount: "",
      name: "Leather Bag For Men",
      oldPrice: "$40",
      newPrice: "$40",
    },

    {
      image: "/p2.png",
      discount: "15% OFF",
      name: "Long Sleeve Sweater",
      oldPrice: "$30",
      newPrice: "$24",
    },

    {
      image: "/p1.png",
      discount: "30% OFF",
      name: "Men's Winter Jacket",
      oldPrice: "$50",
      newPrice: "$40",
    },

    {
      image: "/p5.png ",
      discount: "",
      name: "Solid A Line Dress",
      oldPrice: "$60",
      newPrice: "$50",
    },

  ];

  return (
    <section className="arrivalSection">

      {/* TOP */}

      <div className="arrivalTop">

        <div>

          <p className="weekText">
            🧺 This Week’s
          </p>

          <h1>
            New Arrivals
          </h1>

        </div>

        <div className="arrows">

          <button>←</button>

          <button>→</button>

        </div>

      </div>

      {/* PRODUCTS */}

      <div className="productRow">

        {products.map((item, index) => (

          <div className="arrivalCard" key={index}>

            {/* IMAGE BOX */}

            <div className="imageBox">

              {item.discount && (
                <div className="discount">
                  {item.discount}
                </div>
              )}

              <img src={item.image} alt="" />

            </div>

            {/* PRODUCT INFO */}

            <h3>
              {item.name}
            </h3>

            <div className="prices">

              <span className="oldPrice">
                {item.oldPrice}
              </span>

              <span className="newPrice">
                {item.newPrice}
              </span>

            </div>

          </div>

        ))}

      </div>

      {/* LINE */}

      <div className="bottomLine"></div>

      {/* TOP BUTTON */}

      <button className="topBtn">
        ↑
      </button>

    </section>
  );
}
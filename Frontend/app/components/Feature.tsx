// components/Features.tsx

export default function Features() {

  const features = [
    {
      icon: "/delivery.png",
      title1: "Fast & Secure",
      title2: "Delivery",
    },

    {
      icon: "/guarantee.png",
      title1: "100% Guarantee",
      title2: "On Product",
    },

    {
      icon: "/return.png",
      title1: "24 Hour Return",
      title2: "Policy",
    },

    {
      icon: "/return2.png",
      title1: "24 Hour Return",
      title2: "Policy",
    },

    {
      icon: "/box.png",
      title1: "Next Level Pro",
      title2: "Quality",
    },
  ];

  return (
    <section className="featuresSection">

      {features.map((item, index) => (
        <div className="featureCard" key={index}>

          <img src={item.icon} alt="" />

          <h3>{item.title1}</h3>

          <h4>{item.title2}</h4>

        </div>
      ))}

    </section>
  );
}
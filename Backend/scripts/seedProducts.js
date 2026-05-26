const mongoose = require("mongoose");
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });
const Product = require("../models/Product");

const defaultProducts = [
  {
    title: "Denim Jacket",
    price: 29,
    image: "/p1.png",
    category: "Jackets",
    description: "Premium casual denim jacket with classic metal buttons and dynamic modern fit.",
  },
  {
    title: "Stylish Hat",
    price: 45,
    image: "/p7.png",
    category: "Hats",
    description: "Comfortable and fashionable hat perfect for outdoor sun protection and styling.",
  },
  {
    title: "Women Jacket",
    price: 80,
    image: "/p2.png",
    category: "Jackets",
    description: "Elegant and stylish wind-resistant outerwear designed for modern active women.",
  },
  {
    title: "Fashion Dress",
    price: 100,
    image: "/p4.png",
    category: "Dresses",
    description: "Gorgeous evening designer dress made from high-quality comfortable flowing fabric.",
  },
  {
    title: "Leather Bag For Men",
    price: 40,
    image: "/p3.png",
    category: "Bags",
    description: "Durable and spacious top-grain leather bag built for office, school, and outdoor travel.",
  },
  {
    title: "Solid A Line Dress",
    price: 50,
    image: "/p5.png",
    category: "Dresses",
    description: "A-line silhouette custom dress featuring smooth material and premium solid colors.",
  },
  {
    title: "Fashion Dress v2",
    price: 60,
    image: "/p6.png",
    category: "Dresses",
    description: "Trendsetter casual party wear dress highlighting aesthetic designs and patterns.",
  },
  {
    title: "Fashion Summer Dress",
    price: 40,
    image: "/p8.png",
    category: "Dresses",
    description: "Lightweight and breathable elegant dress optimized for summer outings.",
  },
];

const seedDB = async () => {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    console.error("Error: MONGO_URI is not defined in your environment variables.");
    process.exit(1);
  }

  try {
    console.log("Connecting to Database for seeding...");
    await mongoose.connect(mongoUri);
    console.log("Database Connected successfully.");

    // Delete existing products
    await Product.deleteMany({});
    console.log("Deleted all old product entries.");

    // Insert new products
    await Product.insertMany(defaultProducts);
    console.log("Seeded default premium products successfully!");

    mongoose.connection.close();
    console.log("Database Connection Closed.");
    process.exit(0);
  } catch (error) {
    console.error("Error during database seeding:", error.message);
    process.exit(1);
  }
};

seedDB();

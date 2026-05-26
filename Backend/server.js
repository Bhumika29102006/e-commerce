const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const productRoutes = require("./routes/product");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
connectDB();

// Middlewares
app.use(cors({
  origin: "*", // Allows any origin, highly convenient for local frontend dev
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dynamic Route Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Endpoint Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// Home Root Endpoint
app.get("/", (req, res) => {
  res.json({
    status: "healthy",
    message: "Ecommerce API is running flawlessly",
    version: "1.0.0"
  });
});

// Global Fallback 404 handler
app.use((req, res, next) => {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
});

// Global Error Handler Middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

// App Listening
app.listen(PORT, () => {
  console.log(`Server is running beautifully on port ${PORT}`);
});
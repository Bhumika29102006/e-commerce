const Product = require("../models/Product");

// @desc    Get all products (with optional filtering, search, and sorting)
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const { category, search, sort } = req.query;
    let query = {};

    // Filter by category
    if (category) {
      query.category = { $regex: new RegExp(category, "i") };
    }

    // Search by title or description
    if (search) {
      query.$or = [
        { title: { $regex: new RegExp(search, "i") } },
        { description: { $regex: new RegExp(search, "i") } },
      ];
    }

    let apiQuery = Product.find(query);

    // Sorting options: priceAsc, priceDesc, newest
    if (sort) {
      if (sort === "priceAsc") {
        apiQuery = apiQuery.sort({ price: 1 });
      } else if (sort === "priceDesc") {
        apiQuery = apiQuery.sort({ price: -1 });
      } else if (sort === "newest") {
        apiQuery = apiQuery.sort({ createdAt: -1 });
      }
    } else {
      apiQuery = apiQuery.sort({ createdAt: -1 }); // Default to newest
    }

    const products = await apiQuery;
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private (Admin/User)
const createProduct = async (req, res) => {
  try {
    const { title, price, image, category, description } = req.body;

    if (!title || !price || !image || !category || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = await Product.create({
      title,
      price,
      image,
      category,
      description,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private (Admin/User)
const updateProduct = async (req, res) => {
  try {
    const { title, price, image, category, description } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.title = title || product.title;
    product.price = price !== undefined ? price : product.price;
    product.image = image || product.image;
    product.category = category || product.category;
    product.description = description || product.description;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private (Admin/User)
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};

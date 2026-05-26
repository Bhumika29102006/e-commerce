import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
  },

  category: {
    type: String,
  },

  description: {
    type: String,
  },

});

export default mongoose.models.Product ||
mongoose.model("Product", ProductSchema);
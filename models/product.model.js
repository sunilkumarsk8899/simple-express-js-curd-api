const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },

    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;

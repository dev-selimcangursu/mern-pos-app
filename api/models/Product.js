const mongoose = require("mongoose");

ProductSchema = new mongoose.Schema(
  {
    name: { type: String },
    slug: { type: String },
    category_id: { type: mongoose.Types.ObjectId },
    short_description: { type: String },
    price: { type: String },
    discount_price: { type: String },
    stock: { type: Number },
    stk: { type: String },
    image_name: { type: String },
    is_active: { type: Boolean },
    website_url: { type: String },
  },
  { timestamps: true }
);

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;

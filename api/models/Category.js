const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String },
    slug: { type: String },
    description: { type: String },
    is_active: { type: Boolean, default: true },
    icon: { type: String },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;

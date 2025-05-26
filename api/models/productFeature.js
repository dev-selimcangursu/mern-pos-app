const mongoose = require("mongoose");

const productFeatureSchema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId },
  features: [{
    key: String,
    value: String,
    name: String,
  }],
  is_active:{type:Boolean}
});

const productFeature = mongoose.model("productFeature", productFeatureSchema);

module.exports = productFeature;


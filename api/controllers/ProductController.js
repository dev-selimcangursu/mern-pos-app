const Product = require("../models/Product");
const mongoose = require("mongoose");

const store = async (req, res) => {
  try {
    const newProduct = new Product({
      name: "Wiky Watch 4S Siyah Akıllı Çocuk Saati",
      slug: "wiky-watch-4s",
      category_id: "68317795b713c69c6b824e5b",
      short_description:
        "Wiky Watch 4S Akıllı Çocuk Saati , ebeveyn ve çocukları güvenle birbirine bağlar.4.5G Görüntülü görüşme ve rehberden arama özelliğyle çocuğunuza güvenle bağlanın",
      price: "5790",
      discount_price: "5490",
      stock: "100",
      stk: "28456325487",
      image_name: "wiky-watch-4s-siyah.png",
      is_active: true,
      product_cost: "3000",
    });
    const productSave = await newProduct.save();

    if (productSave) {
      res.send("Ürün Başarıyla Eklendi");
    } else {
      res.send("Ürün Eklenemedi");
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error });
  }
};
// Kategoriye Göre Ürünlerin Listelenmesi
const getProduct = async (req, res) => {
  try {
    const { categoryId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res
        .status(400)
        .json({ success: false, message: "Geçersiz kategori ID" });
    }
    const queryProduct = await Product.find({
      category_id: new mongoose.Types.ObjectId(categoryId),
    });

    return res.status(200).json({ success: true, data: queryProduct });
  } catch (error) {
    console.error("Ürünleri alırken hata:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
// Tüm Ürünler

const allProduct = async (req, res) => {
  try {
    const data = await Product.find();
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.error("Ürünleri alırken hata:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findById( new mongoose.Types.ObjectId(productId),);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Ürün bulunamadı" });
    }
    return res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.error("Ürünü alırken hata:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { store, getProduct, allProduct, getProductById };

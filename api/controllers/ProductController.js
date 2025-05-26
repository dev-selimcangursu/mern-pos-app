const Product = require("../models/Product");
const mongoose = require("mongoose");
const ProductFeature = require("../models/productFeature");

// Ürüne özellik ekleme fonksiyonu
const addProductFeature = async (req, res) => {
  try {
    const newData = await ProductFeature.create({
      product_id: "683315c3f34f679c62a787f1",
      features: [
        {
          key: "weight",
          value: 212,
          name: "Ağırlık",
        },
        {
          key: "size",
          value: "153x88x25 mm",
          name: "Boyut",
        },
        {
          key: "sos",
          value: "Var",
          name: "Sos Acil Arama",
        },
        {
          key: "voiceSearch",
          value: "Var",
          name: "Sesli Arama",
        },
        {
          key: "videoCall",
          value: "Var",
          name: "Görüntülü Görüşme Desteği",
        },
        {
          key: "multiVideoCall",
          value: "Var",
          name: "Çoklu Görüntülü Sohbet",
        },
        {
          key: "voiceMail",
          value: "Var",
          name: "Sesli Mesaj Alma/Gönderme",
        },
        {
          key: "writtenMessage",
          value: "Var",
          name: "Yazılı Mesaj Alma",
        },
        {
          key: "remoteImaging",
          value: "Var",
          name: "Uzaktan Görüntü Alma",
        },
        {
          key: "activeKey",
          value: "Var",
          name: "Tuşlu Arama Aktifleştirme",
        },
        {
          key: "numberOfGuides",
          value: "Sınırsız",
          name: "Rehber Kişi Sayısı",
        },
        {
          key: "currentLocation",
          value: "Var",
          name: "Anlık Konum Takibi",
        },
        {
          key: "pastRoute",
          value: "Var",
          name: "Geçmiş Rota Takip",
        },
        {
          key: "alarm",
          value: "Var",
          name: "Alarm",
        },
        {
          key: "warningFromArm",
          value: "Var",
          name: "Koldan Çıktı Uyarısı",
        },
        {
          key: "classMode",
          value: "Var",
          name: "Sınıf Modu",
        },
        {
          key: "electronicFence",
          value: "Var",
          name: "Elektronik Çit",
        },
        {
          key: "trackingRange",
          value: "Var",
          name: "Takip Aralığı",
        },
        {
          key: "game",
          value: "Var",
          name: "Oyun",
        },
        {
          key: "vibration",
          value: "Var",
          name: "Titreşim",
        },
      ],
      is_active: true,
    });

    return res.status(201).json({ success: true, data: newData });
  } catch (error) {
    console.error("Ürün özellikleri eklerken hata:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
// Belirli bir kategoriye ait ürünleri getirme
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

    if (queryProduct.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Bu kategoriye ait ürün bulunamadı" });
    }

    // Ürünlere aktif özellikleri ekle
    const productsWithFeatures = await Promise.all(
      queryProduct.map(async (product) => {
        const features = await ProductFeature.findOne({
          product_id: product._id,
          is_active: true,
        });

        return {
          ...product.toObject(),
          features: features?.features || [],
        };
      })
    );

    return res.status(200).json({ success: true, data: productsWithFeatures });
  } catch (error) {
    console.error("Ürünleri alırken hata:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Tüm ürünleri getir
const allProduct = async (req, res) => {
  try {
    const products = await Product.find();

    const productsWithFeatures = await Promise.all(
      products.map(async (product) => {
        const features = await ProductFeature.findOne({
          product_id: product._id,
          is_active: true,
        });

        return {
          ...product.toObject(),
          features: features?.features || [],
        };
      })
    );

    return res.status(200).json({ success: true, data: productsWithFeatures });
  } catch (error) {
    console.error("Ürünleri alırken hata:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
// Belirli bir ürün ID'sine göre ürün bilgisi getir
const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findById(
      new mongoose.Types.ObjectId(productId)
    );

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Ürün bulunamadı" });
    }

    const features = await ProductFeature.findOne({
      product_id: product._id,
      is_active: true,
    });

    return res.status(200).json({
      success: true,
      data: {
        ...product.toObject(),
        features: features?.features,
      },
    });
  } catch (error) {
    console.error("Ürünü alırken hata:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
// Ürün adına göre arama yap
const searchProduct = async (req, res) => {
  try {
    const { productName } = req.params;

    const products = await Product.find({
      name: { $regex: productName, $options: "i" },
    });

    if (products.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Ürün bulunamadı" });
    }

    const productsWithFeatures = await Promise.all(
      products.map(async (product) => {
        const features = await ProductFeature.findOne({
          product_id: product._id,
          is_active: true,
        });

        return {
          ...product.toObject(),
          features: features?.features || [],
        };
      })
    );

    return res.status(200).json({ success: true, data: productsWithFeatures });
  } catch (error) {
    console.error("Ürün arama hatası:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getProduct,
  allProduct,
  getProductById,
  addProductFeature,
  searchProduct,
};

const Categories = require("../models/Category");

// Tüm Kategorileri Getir
const fetch = async (req, res) => {
  try {
    const data = await Categories.find();

    if (data) {
      return res.json({ success: true, data: data });
    } else {
      return res.json({
        success: false,
        message: "Kategori Listesi Bulunamadı!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Kategori Listesi Bulunamadı!",
    });
  }
};

// Yeni Kategori Ekleme Rotası
const store = async (req, res) => {
  try {
    const category = new Categories({
      name: "Suluk ve Matara",
      slug: "suluk-ve-matara",
      description: "Tüm Suluk ve Matara Modellerimiz Listelenir.",
      is_active: true,
    });

    const categoryStatus = await category.save();

    if (categoryStatus) {
      return res.send("Kategori Başarıyla Eklendi");
    } else {
      return res.send("Kategori Eklenemedi !");
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = { store, fetch };

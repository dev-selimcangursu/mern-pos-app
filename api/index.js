const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5255;
const CategoryRoutes = require('./routes/CategoryRoutes')
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());

app.use('/category',CategoryRoutes);

// MongoDB bağlantısı
const uri = "mongodb://localhost:27017/wikywatch_pos_app";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB bağlantısı başarılı");

    // Bağlantı başarılıysa sunucuyu başlat
    app.listen(PORT, () => {
      console.log(`🚀 Sunucu ${PORT} Portunda Çalışıyor`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB bağlantı Hatası:", err);
    process.exit(1);
  });

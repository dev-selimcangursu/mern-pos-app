import axios from "axios";
// Tüm ürünleri çeken fonksiyon
export const allProduct = async () => {
  try {
    const response = await axios.get("http://localhost:5255/product/fetch");
    return response.data;
  } catch (error) {
    console.error("Ürün Verisi Alınamadı :", error);
    throw error;
  }
};
// Belirli bir kategoriye ait ürünleri getiren fonksiyon
export const getProduct = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5255/product/get/${id}`);
    return response.data;
  } catch (error) {
    console.error("Kategoriye Ait Ürün Verisi Alınamadı:", error);
    throw error;
  }
};
// Sepete eklenmek üzere belirli bir ürün grubunu getiren fonksiyon
export const getProductToBasket = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:5255/product/get/section/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Ürün Sepete Eklenemedi:", error);
    throw error;
  }
};
// Arama çubuğu için ürün arayan fonksiyon
export const searchProduct = async (productName) => {
  try {
    const response = await axios.get(
      `http://localhost:5255/product/search/${productName}`
    );
    return response.data;
  } catch (error) {
    console.error("Ürün Arama Hatası:", error);
    throw error;
  }
};

import axios from "axios";

// Tüm kategorileri API'den getiren fonksiyon
export const fetchAllCategory = async () => {
  try {
    const response = await axios.get("http://localhost:5255/category/fetch");
    return response.data; 
  } catch (error) {
    console.error("Kategori verisi alınamadı:", error);
    throw error;
  }
};
// Belirli bir kategoriye ait ürünleri getiren fonksiyon
export const getProduct = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5255/product/get/product/${id}`);
    return response.data; 
  } catch (error) {
    console.error("Kategori verisi alınamadı:", error);
    throw error;
  }
};


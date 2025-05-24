import axios from "axios";

export const fetchAllCategory = async () => {
  try {
    const response = await axios.get("http://localhost:5255/category/fetch");
    return response.data; 
  } catch (error) {
    console.error("Kategori verisi alınamadı:", error);
    throw error;
  }
};

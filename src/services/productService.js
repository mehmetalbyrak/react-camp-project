import axios from "axios";

const ProductService = {
  getAllProducts: async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      if (response && response.data && response.data.products) {
        return response.data.products; // Tüm ürünleri döndür
      }
      return []; // Veri yoksa boş bir dizi döndür
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Hata oluştuğunda boş bir dizi döndür
    }
  },
};

export default ProductService;

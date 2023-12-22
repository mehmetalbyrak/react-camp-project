import axios from "axios";

export default class ProductService {
  getProducts() {
    return axios.get("http://localhost:8000/api/products/getall");
  }
}

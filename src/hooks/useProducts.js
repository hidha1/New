import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
      } catch (err) {
        setError("Failed to fetch products", err);
      }
    };
    fetchProducts();
  }, []);
  return { products, error };
};
export default useProducts;

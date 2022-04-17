import {useEffect, useState} from "react";
import {Product} from "../types";
import {MOCK_PRODUCTS} from "../utils";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setTimeout(() => setProducts(MOCK_PRODUCTS), 200);
  }, []);
  return products;
}

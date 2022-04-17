import {Product} from "../types";
import {useEffect, useState} from "react";
import {MOCK_PRODUCTS} from "../utils";

export default function useProduct(id?: number) {
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    setTimeout(() => id && setProduct(MOCK_PRODUCTS.find(mock => mock.id === id)), 200);
  }, [])
  return product;
}
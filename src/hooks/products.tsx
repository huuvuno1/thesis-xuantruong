'use client';

import { Product } from '@/types/products';
import { useEffect, useState } from 'react';

interface Props {
  category_code?: string;
}

export const useProducts = (props: Props) => {
  const { category_code = '' } = props;

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        `/api/products?category_code=${category_code}`
      );
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, [category_code]);

  return products;
};

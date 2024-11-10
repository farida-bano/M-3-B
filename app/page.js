// app/page.js

"use client"; // Marks this file as a client component

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products'); // Make sure this path is correct
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

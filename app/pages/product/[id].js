import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const res = await fetch(`/api/products`);
        const products = await res.json();
        const selectedProduct = products.find((product) => product.id === parseInt(id));
        setProduct(selectedProduct);
      };
      fetchProduct();
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} className="w-full h-80 object-cover" />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button className="bg-green-500 text-white py-2 px-4 mt-4">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;


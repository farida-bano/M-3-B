// pages/api/products.js

export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a product description.',
      price: 20,
      imageUrl: '/images/product1.jpg', // Path to image in public folder
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is another product description.',
      price: 30,
      imageUrl: '/images/product2.jpg',
    },
  ];

  if (req.method === 'GET') {
    res.status(200).json(products);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

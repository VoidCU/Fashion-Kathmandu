import express from 'express';
import data from './data.js';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authprization');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/api/products', (req, res) => {
  const featuredProduct = data.products.find((product) => product.isFeatured);

  const sortedProducts = [...data.products]
    .filter((product) => !product.isFeatured) // Filter out non-featured products
    .sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate)); // Sort by newest to oldest

  const simplifiedFeaturedProduct = {
    id: featuredProduct.id,
    name: featuredProduct.name,
    slug: featuredProduct.slug,
    price: featuredProduct.price,
    image: featuredProduct.images[0].imageUrl, // We are selecting the first image URL
    inStock: featuredProduct.inStock,
    category: featuredProduct.category,
  };

  const simplifiedProducts = [
    simplifiedFeaturedProduct,
    ...sortedProducts.map((product) => ({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      image: product.images[0].imageUrl, // We are selecting the first image URL
      inStock: product.inStock,
      category: product.category,
    })),
  ];

  res.send(simplifiedProducts);
});

app.get('/api/product/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (!product) {
    res.status(404).send({ message: 'Product Not Found' });
    return;
  }
  res.send(product);
});

app.get('/api/categories', (req, res) => {
  //get unique categories
  const categories = [...new Set(data.products.map((x) => x.category))];
  res.send(categories);
});

//api to get products by category

app.get('/api/categorie/:slug', (req, res) => {
  const products = data.products.filter(
    (x) => x.category.toLowerCase() === req.params.slug.toLowerCase()
  );
  if (products) {
    res.send(products);
  } else {
    res.status(404).send({ message: 'Products Not Found' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

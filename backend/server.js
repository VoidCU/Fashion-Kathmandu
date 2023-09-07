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
  res.send(data.products);
});

app.get('/api/product/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  const relatedProducts = data.products.filter(
    (x) => x.category === product.category && x.slug !== req.params.slug
  );
  if (product) {
    res.send({ product: product, relatedProducts: relatedProducts });
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
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

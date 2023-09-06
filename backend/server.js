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
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

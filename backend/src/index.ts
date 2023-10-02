import express from 'express';
import ConnectMongoDBSession from 'connect-mongodb-session';
import session from 'express-session';
import mongoose from 'mongoose';
import * as url from 'url';
import path from 'path';
import cors from 'cors';
import { startAdmin } from './admin.js';
import { startApi } from './api.js';
import { Product } from './models/Product.model.js';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();
// app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect(`${process.env.MONGODB_URI}`);
// mongoose.connect(`mongodb://127.0.0.1:27017/adminjs`);

const MongoDBStore = ConnectMongoDBSession(session);
const store = new MongoDBStore({
  // uri: `mongodb://127.0.0.1:27017`,
  uri: `${process.env.MONGODB_URI}`,
  collection: 'session',
  expires: 1000 * 60 * 60 * 24 * 7,
});

app.use(cors({ origin: true, credentials: true }));

startAdmin(app, store);
startApi(app);

app.use(express.static(path.join(__dirname, '../../frontend/dist')));
app.use(express.static(path.join(__dirname, '../../frontend')));

app.get('/frontend/files/*', (req, res, next) => {
  const xhandle = express.static(path.join(__dirname, '../..'));
  return xhandle(req, res, next);
});

app.get('/product/:slug', (req, res) => {
  const indexPath = path.join(__dirname, '../../frontend/dist/index.html');
  fs.readFile(indexPath, 'utf8', async (err, data) => {
    if (err) {
      return res.status(500).send('Error loading index.html');
    }
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) {
      return res.status(404).send('Product not found');
    }
    const modifiedData = data.replace(
      'Fashion Kathmandu',
      `${product.name} - Fashion Kathmandu`
    );
    const updatedData = modifiedData.replaceAll(
      'Nepal-based company making an honest effort to make a brand name on Nepalese hand tailored dress',
      product.description
    );
    const updatedData2 = updatedData.replaceAll(
      'images/logo.png',
      '/files/' + product.images[0] // Assuming the first image in the product's images array is the appropriate one to use
    );

    res.send(updatedData2);
  });
  // res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

app.get('/category/:slug', (req, res) => {
  const indexPath = path.join(__dirname, '../../frontend/dist/index.html');
  fs.readFile(indexPath, 'utf8', async (err, data) => {
    if (err) {
      return res.status(500).send('Error loading index.html');
    }
    const modifiedData = data.replace(
      'Fashion Kathmandu',
      `${req.params.slug} - Fashion Kathmandu`
    );

    res.send(modifiedData);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

const PORT: number = parseInt(process.env.PORT || '3000');
app.listen(PORT, () => {
  console.log(`AdminJS started on http://localhost:${PORT}`);
});

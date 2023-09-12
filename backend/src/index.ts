import express from 'express';
import ConnectMongoDBSession from 'connect-mongodb-session';
import session from 'express-session';
import mongoose from 'mongoose';
import * as url from 'url';
import path from 'path';
import { startAdmin } from './admin.js';
import { startApi } from './api.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const PORT = 3000;
const app = express();
app.use(express.static(path.join(__dirname, '../public')));
mongoose.connect('mongodb://127.0.0.1:27017/adminjs');

const MongoDBStore = ConnectMongoDBSession(session);
const store = new MongoDBStore({
  uri: `mongodb://127.0.0.1:27017`,
  collection: 'session',
  expires: 1000 * 60 * 60 * 24 * 7,
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

startAdmin(app, store);
startApi(app);

app.listen(PORT, () => {
  console.log(`AdminJS started on http://localhost:${PORT}`);
});

// AdminJS.registerAdapter({
//   Resource: AdminJSMongoose.Resource,
//   Database: AdminJSMongoose.Database,
// });

// const authenticate = async (email: string, password: string) => {
//   const admin = await Admin.findOne({ email: email });
//   if (admin && admin.password === password) {
//     return Promise.resolve(admin);
//   }
//   return null;
// };

// const start = async () => {

//   app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.header('Access-Control-Allow-Credentials', 'true');
//     next();
//   });

//   await mongoose.connect('mongodb://127.0.0.1:27017/adminjs');
//   app.use(express.static(path.join(__dirname, '../public')));
//   const admin = new AdminJS({
//     componentLoader,
//     resources: [adminResource, subscriber, category, product, review, query],
//   });

//   const MongoDBStore = ConnectMongoDBSession(session);
//   const store = new MongoDBStore({
//     uri: `mongodb://127.0.0.1:27017`,
//     collection: 'session',
//     expires: 1000 * 60 * 60 * 24 * 7,
//   });

//   const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
//     admin,
//     {
//       authenticate,
//       cookieName: 'adminjs',
//       cookiePassword: 'sessionsecret',
//     },
//     null,
//     {
//       store: store,
//       resave: true,
//       saveUninitialized: true,
//       secret: 'sessionsecret',
//       cookie: {
//         httpOnly: process.env.NODE_ENV === 'production',
//         secure: process.env.NODE_ENV === 'production',
//       },
//       name: 'adminjs',
//     }
//   );
//   app.use(admin.options.rootPath, adminRouter);

// app.get('/api/products', async (req, res) => {
//   const products = await Product.find({});
//   const categories = await Category.find({});

//   const categoryMap = {};
//   categories.forEach((category) => {
//     categoryMap[category._id] = category.title;
//   });

//   const featuredproduct = products.filter(
//     (product) => product.isFeatured === true
//   );
//   const sortedProducts = [...products]
//     .filter((product) => !product.isFeatured)
//     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

//   const simplifiedFeaturedProduct = {
//     id: featuredproduct[0]._id,
//     name: featuredproduct[0].name,
//     slug: featuredproduct[0].slug,
//     price: featuredproduct[0].price,
//     images: featuredproduct[0].images[0],
//     bucket: featuredproduct[0].bucket[0],
//     category: categoryMap[featuredproduct[0].category],
//     isFeatured: featuredproduct[0].isFeatured,
//     inStock: featuredproduct[0].inStock,
//   };
//   const simplifiedProducts = [
//     simplifiedFeaturedProduct,
//     ...sortedProducts.map((product) => ({
//       id: product._id,
//       name: product.name,
//       slug: product.slug,
//       price: product.price,
//       images: product.images[0],
//       bucket: product.bucket[0],
//       category: categoryMap[product?.category],
//       inStock: product.inStock,
//     })),
//   ];
//   res.send(simplifiedProducts);
// });

// app.get('/api/product/:slug', async (req, res) => {
//   const product = await Product.findOne({ slug: req.params.slug });
//   const category = await Category.findOne({ _id: product?.category });
//   const simplifiedProduct = {
//     id: product?._id,
//     name: product?.name,
//     slug: product?.slug,
//     price: product?.price,
//     images: product?.images,
//     bucket: product?.bucket,
//     category: category?.title,
//     isFeatured: product?.isFeatured,
//     inStock: product?.inStock,
//     detailed_description: product?.detailed_description,
//     materials: product?.materials,
//   };
//   res.send(simplifiedProduct);
// });

// app.get('/api/categories', async (req, res) => {
//   const categories = await Category.find({}, 'title');
//   res.send(categories);
// });

// app.get('/api/categorie/:slug', async (req, res) => {
//   const category = await Category.findOne({ title: req.params.slug });
//   if (category) {
//     const products = await Product.find({ category: category?._id });
//     res.send(products);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });

//   app.listen(PORT, () => {
//     console.log(
//       `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
//     );
//   });
// };

// start();

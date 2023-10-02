import express from 'express';
import ConnectMongoDBSession from 'connect-mongodb-session';
import session from 'express-session';
import mongoose from 'mongoose';
import * as url from 'url';
import path from 'path';
import { startAdmin } from './admin.js';
import { startApi } from './api.js';
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

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5500');
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

startAdmin(app, store);
startApi(app);

app.use(express.static(path.join(__dirname, '../../frontend/dist')));
app.use(express.static(path.join(__dirname, '../../frontend')));

app.get('/frontend/files/*', (req, res, next) => {
  const xhandle = express.static(path.join(__dirname, '../..'));
  return xhandle(req, res, next);
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

const PORT: number = parseInt(process.env.PORT || '3000');
app.listen(PORT, () => {
  console.log(`AdminJS started on http://localhost:${PORT}`);
});

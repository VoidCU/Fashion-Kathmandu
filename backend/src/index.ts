import express from 'express';
import ConnectMongoDBSession from 'connect-mongodb-session';
import session from 'express-session';
import mongoose from 'mongoose';
import * as url from 'url';
import path from 'path';
import { startAdmin } from './admin.js';
import { startApi } from './api.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/index.html'));
});

const PORT: number = parseInt(process.env.PORT || '3000');
app.listen(PORT, () => {
  console.log(`AdminJS started on http://localhost:${PORT}`);
});

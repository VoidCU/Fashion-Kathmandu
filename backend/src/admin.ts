import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import * as AdminJSMongoose from '@adminjs/mongoose';
import { Admin } from './models/Admin.model.js';
import { componentLoader } from './components/components.js';
import { adminResource } from './resources/adminResource.js';
import { subscriber } from './resources/subscriber.js';
import { category } from './resources/category.js';
import { product } from './resources/product.js';
import { review } from './resources/review.js';
import { query } from './resources/query.js';

export const startAdmin = (app: any, store: any) => {
  AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
  });

  const admin = new AdminJS({
    componentLoader,
    resources: [adminResource, subscriber, category, product, review, query],
    rootPath: '/admin',
    branding: {
      companyName: 'Fashion Kathmandu',
      logo: '/images/logo.png',
    },
  });

  const authenticate = async (email: string, password: string) => {
    const admin = await Admin.findOne({ email: email });
    if (admin && admin.password === password) {
      return Promise.resolve(admin);
    }
    return null;
  };

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookieName: 'adminjs',
      cookiePassword: 'sessionsecret',
    },
    null,
    {
      store: store,
      resave: true,
      saveUninitialized: true,
      secret: 'sessionsecret',
      cookie: {
        httpOnly: process.env.NODE_ENV === 'production',
        secure: process.env.NODE_ENV === 'production',
      },
      name: 'adminjs',
    }
  );

  app.use(admin.options.rootPath, adminRouter);
};

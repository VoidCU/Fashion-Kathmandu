import express, { Request, Response } from 'express';

import { Product } from './models/Product.model.js';
import { Category } from './models/Category.model.js';
import { Review } from './models/Review.model.js';
import { Subscriber } from './models/Subscriber.model.js';
import { Query } from './models/Query.model.js';

export const startApi = (app: any) => {
  const router = express.Router();
  app.use(express.json());
  app.get('/api/products', async (req: Request, res: Response) => {
    const products = await Product.find({});
    const categories = await Category.find({});

    const categoryMap: Record<string, string> = {};
    categories.forEach((category) => {
      categoryMap[category._id.toString()] = category.title;
    });

    const featuredproduct = products.filter(
      (product) => product.isFeatured === true
    );
    const sortedProducts = [...products]
      .filter((product) => product.name !== featuredproduct[0]?.name)
      .sort((a, b) => {
        const createdAtA = new Date(a.get('createdAt')).getTime();
        const createdAtB = new Date(b.get('createdAt')).getTime();
        return createdAtB - createdAtA;
      });

    if (featuredproduct.length === 0) {
      const simplifiedProducts = [
        ...sortedProducts.map((product) => ({
          id: product._id,
          name: product.name,
          slug: product.slug,
          images: product.images[0],
          bucket: product.bucket[0],
          category: categoryMap[product.category.toString()],
          inStock: product.inStock,
        })),
      ];
      res.send(simplifiedProducts);
    } else {
      const simplifiedFeaturedProduct = {
        id: featuredproduct[0]._id,
        name: featuredproduct[0].name,
        slug: featuredproduct[0].slug,
        images: featuredproduct[0].images[0],
        bucket: featuredproduct[0].bucket[0],
        category: categoryMap[featuredproduct[0].category.toString()],
        isFeatured: featuredproduct[0].isFeatured,
        inStock: featuredproduct[0].inStock,
      };
      const simplifiedProducts = [
        simplifiedFeaturedProduct,
        ...sortedProducts.map((product) => ({
          id: product._id,
          name: product.name,
          slug: product.slug,
          images: product.images[0],
          bucket: product.bucket[0],
          category: categoryMap[product.category.toString()],
          inStock: product.inStock,
        })),
      ];
      res.send(simplifiedProducts);
    }
  });

  app.get('/api/product/:slug', async (req: Request, res: Response) => {
    const product = await Product.findOne({ slug: req.params.slug });
    const category = await Category.findOne({ _id: product?.category });
    const simplifiedProduct = {
      id: product?._id,
      name: product?.name,
      slug: product?.slug,
      // price: product?.price,
      images: product?.images,
      bucket: product?.bucket,
      category: category?.title,
      isFeatured: product?.isFeatured,
      inStock: product?.inStock,
      threeDView: product?.threeDView,
      description: product?.description,
      detailed_description: product?.detailed_description,
      materials: product?.materials,
      sizes: product?.sizes,
    };
    res.send(simplifiedProduct);
  });

  app.get('/api/categories', async (req: Request, res: Response) => {
    const categories = await Category.find({}, 'title');
    res.send(categories);
  });

  app.get('/api/categorie/:slug', async (req: Request, res: Response) => {
    const category = await Category.findOne({ title: req.params.slug });
    if (category) {
      const products = await Product.find({ category: category?._id });
      res.send(products);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });

  app.get('/api/reviews/:slug', async (req: Request, res: Response) => {
    const reviews = (await Review.find({ product: req.params.slug })).filter(
      (x) => x.flagged
    );
    if (reviews) {
      res.send(reviews);
    } else {
      res.status(404).send({ message: 'No Reviews Found' });
    }
  });

  app.post('/api/reviews/:slug', async (req: Request, res: Response) => {
    const { name, email, content } = req.body;
    const product = await Product.findOne({ _id: req.params.slug });

    if (!product) {
      res.send({ message: 'Product Not Found' });
    } else {
      const doesExist = await Review.findOne({
        email: email,
        product: product._id,
      });
      if (doesExist) {
        if (doesExist.content.length < content.length) {
          doesExist.content = content;
          await doesExist.save();
          res.send({ message: 'Review Updated' });
        } else {
          res.send({ message: 'Review already exists' });
        }
      } else {
        const review = new Review({
          name: name,
          content: content,
          email: email,
          product: product._id,
          flagged: false,
        });
        const createdReview = await review.save();
        res.status(201).send({
          message: 'Review Created',
          review: createdReview,
        });
      }
    }
  });

  app.post('/api/newsletter', async (req: Request, res: Response) => {
    const { email } = req.body;
    const subscriber = new Subscriber({
      email: email,
    });
    //check if the email exists
    const doesExist = await Subscriber.findOne({ email: email });
    if (doesExist) {
      res.send({ message: 'Email already exists' });
    } else {
      const createdSubscriber = await subscriber.save();
      res.status(201).send({
        message: 'Subscribed',
        subscriber: createdSubscriber,
      });
    }
  });

  app.post('/api/queries/:slug', async (req: Request, res: Response) => {
    const { name, email, query } = req.body;
    const product = await Product.findOne({ _id: req.params.slug });

    //check length of query of old and new and if new has more length then update
    if (!product) {
      res.send({ message: 'Product Not Found' });
    } else {
      const doesExist = await Query.findOne({
        email: email,
        product: product._id,
      });
      if (doesExist) {
        if (doesExist.query.length < query.length) {
          doesExist.query = query;
          await doesExist.save();
          res.send({ message: 'Query Updated' });
        } else {
          res.send({ message: 'Query already exists' });
        }
      } else {
        const newquery = new Query({
          name: name,
          email: email,
          query: query,
          product: product._id,
        });
        const createdQuery = await newquery.save();
        res.status(201).send({
          message: 'Query Created',
          query: createdQuery,
        });
      }
    }
  });

  app.use('/api', router);
};

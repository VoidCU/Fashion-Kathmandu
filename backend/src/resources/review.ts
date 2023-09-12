import { Components } from '../components/components.js';
import { Review } from '../models/Review.model.js';

export const review = {
  resource: Review,
  options: {
    listProperties: ['name', 'product', 'content', 'flagged'],
    editProperties: ['flagged'],
    navigation: {
      name: 'Products',
    },
  },
};

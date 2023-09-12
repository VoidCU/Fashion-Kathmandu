import { Category } from '../models/Category.model.js';
import { Components } from '../components/components.js';

export const category = {
  resource: Category,
  options: {
    editProperties: ['title'],
    listProperties: ['title', 'productCount'],
    navigation: {
      name: 'Products',
      icon: 'Tag',
    },
  },
};

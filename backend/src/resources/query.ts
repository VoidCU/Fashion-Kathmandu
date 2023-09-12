import { Query } from '../models/Query.model.js';

export const query = {
  resource: Query,
  options: {
    navigation: {
      name: 'Queries',
      icon: 'MessageCircle',
    },
  },
};

import { Query } from '../models/Query.model.js';

export const query = {
  resource: Query,
  options: {
    listProperties: ['name', 'email', 'query'],
    navigation: {
      name: 'Queries',
      icon: 'MessageCircle',
    },
  },
};

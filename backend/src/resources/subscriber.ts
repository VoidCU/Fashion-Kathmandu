import { Subscriber } from '../models/Subscriber.model.js';

export const subscriber = {
  resource: Subscriber,
  options: {
    listProperties: ['email', 'createdAt'],
    editProperties: ['email'],
    navigation: {
      name: 'Users',
      icon: 'User',
    },
  },
};

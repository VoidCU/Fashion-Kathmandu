import { Admin } from '../models/Admin.model.js';

export const adminResource = {
  resource: Admin,
  options: {
    listProperties: ['email'],
    ishidden: true,
    navigation: {
      name: 'Admins',
      icon: 'User',
    },
  },
};

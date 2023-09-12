import { Admin } from '../models/Admin.model.js';

export const adminResource = {
  resource: Admin,
  options: {
    listProperties: ['email'],
    action: {
      name: 'Delete',
      actionType: 'record',
      icon: 'Delete',
      handler: async (request, response, context) => {
        const { record } = context;
        await Admin.findByIdAndDelete(record.params._id);
        return {
          record: record.toJSON(context.currentAdmin),
        };
      },
    },
    ishidden: true,
    navigation: {
      name: 'Admins',
      icon: 'User',
    },
  },
};

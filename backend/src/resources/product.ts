import { componentLoader, Components } from '../components/components.js';
import { Product } from '../models/Product.model.js';
import uploadFeature from '@adminjs/upload';

const localProvider = {
  bucket: 'public/files',
  opts: {
    baseUrl: 'c:/Users/VoidCU/Desktop/backend/public/files',
  },
};

export const product = {
  resource: Product,
  options: {
    listProperties: ['name', 'price', 'category', 'isFeatured', 'inStock'],
    showProperties: [
      'name',
      'description',
      'price',
      'threeDView',
      'category',
      'sizes',
      'materials',
      'detailed_description',
      'isFeatured',
      'inStock',
    ],
    editProperties: [
      'name',
      'description',
      'price',
      'file',
      'category',
      'sizes',
      'materials',
      'detailed_description',
      'isFeatured',
      'inStock',
    ],
    properties: {
      images: {
        type: 'string',
        isArray: true,
      },
      bucket: {
        type: 'string',
        isArray: true,
      },
      detailed_description: {
        type: 'richtext',
      },
      sizes: {
        availableValues: [
          {
            value: 'S, M, L, XL, XXL',
            label: 'Small, Medium, Large, ExtraLarge, ExtraExtraLarge ',
          },
        ],
      },
    },
    navigation: {
      name: 'Products',
      icon: 'Tag',
    },
  },
  features: [
    uploadFeature({
      componentLoader,
      provider: { local: localProvider },
      multiple: true,
      validation: { mimeTypes: ['image/png', 'image/jpg', 'image/jpeg'] },
      properties: { key: 'images', bucket: 'bucket' },
    }),
  ],
};

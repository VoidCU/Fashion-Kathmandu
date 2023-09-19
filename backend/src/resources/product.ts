import { componentLoader } from '../components/components.js';
import { Product } from '../models/Product.model.js';
import uploadFeature from '@adminjs/upload';

const localProvider = {
  bucket: './frontend/dist/files',
  opts: {
    baseUrl: '/files',
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
      'images',
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
      '3Dfile',
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
      threeDView: {
        type: 'string',
        isArray: true,
      },
      threeDViewBucket: {
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
      properties: {
        key: 'images',
        bucket: 'bucket',
        file: 'file',
        filePath: 'filePath',
        filesToDelete: 'filesToDelete',
      },
      uploadPath: (record, filename) => `${record.id()}/images/${filename}`,
    }),
    uploadFeature({
      componentLoader,
      provider: { local: localProvider },
      multiple: true,
      validation: { mimeTypes: ['image/png', 'image/jpg', 'image/jpeg'] },
      properties: {
        key: 'threeDView',
        bucket: 'threeDViewBucket',
        file: '3Dfile',
        filePath: 'threeDfilePath',
        filesToDelete: 'threeDfilesToDelete',
      },
      uploadPath: (record, filename) => `${record.id()}/3D/${filename}`,
    }),
  ],
};

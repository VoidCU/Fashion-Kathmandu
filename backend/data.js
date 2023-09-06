const data = {
  products: [
    {
      id: 1,
      name: 'Stylish T-Shirt',
      description: 'A trendy and comfortable t-shirt for everyday wear.',
      price: 19.99,
      images: [
        {
          imageUrl: '/images/item1.png',
          altText: 'Front View',
        },
        {
          imageUrl: '/images/item2.png',
          altText: 'Back View',
        },
      ],
      threeDView: '/3dviews/stylish-t-shirt.3d',
      category: 'Clothing',
      subCategory: 'Men',
      slug: 'stylish-t-shirt',
      addedDate: '2023-09-06',
      isFeatured: false,
      detailed_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget do lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget dolor.',
      materials: ['Cotton', 'Polyester'],
    },
    {
      id: 2,
      name: 'Elegant Dress',
      description: 'An elegant dress suitable for special occasions.',
      price: 49.99,
      images: [
        {
          imageUrl: '/images/item1.png',
          altText: 'Front View',
        },
        {
          imageUrl: '/images/item2.png',
          altText: 'Back View',
        },
      ],
      threeDView: '/3dviews/stylish-t-shirt.3d',
      category: 'Clothing',
      subCategory: 'Women',
      slug: 'elegant-dress',
      addedDate: '2023-09-05',
      isFeatured: false,
      detailed_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget do lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget dolor.',
      materials: ['Silk'],
    },
    {
      id: 3,
      name: 'Casual Jeans',
      description: 'Comfortable jeans for a casual day out.',
      price: 34.99,
      images: [
        {
          imageUrl: '/images/item1.png',
          altText: 'Front View',
        },
        {
          imageUrl: '/images/item2.png',
          altText: 'Back View',
        },
      ],
      threeDView: '/3dviews/stylish-t-shirt.3d',
      category: 'Clothing',
      subCategory: 'Men',
      slug: 'casual-jeans',
      addedDate: '2023-09-04',
      isFeatured: false,
      detailed_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget do lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget do lorem',
      materials: ['Silk'],
    },
    {
      id: 4,
      name: 'Sneakers',
      description: 'Stylish and comfortable sneakers for sports and leisure.',
      price: 59.99,
      images: [
        {
          imageUrl: '/images/item1.png',
          altText: 'Front View',
        },
        {
          imageUrl: '/images/item2.png',
          altText: 'Back View',
        },
      ],
      threeDView: '/3dviews/stylish-t-shirt.3d',
      category: 'Footwear',
      subCategory: 'Men',
      slug: 'stylish-sneakers',
      addedDate: '2023-09-03',
      isFeatured: false,
      detailed_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget do loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget do lorem',
      materials: ['Silk'],
    },
    {
      id: 5,
      name: 'Summer Dress',
      description: 'A lightweight and fashionable dress for the summer season.',
      price: 39.99,
      images: [
        {
          imageUrl: '/images/item1.png',
          altText: 'Front View',
        },
        {
          imageUrl: '/images/item2.png',
          altText: 'Back View',
        },
      ],
      threeDView: '/3dviews/stylish-t-shirt.3d',
      category: 'Clothing',
      subCategory: 'Women',
      slug: 'summer-dress',
      addedDate: '2023-09-02',
      isFeatured: false,
      detailed_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget do lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget do lorem',
      materials: ['Silk'],
    },
    {
      id: 6,
      name: 'Formal Suit',
      description: 'A classic formal suit for business and special events.',
      price: 99.99,
      images: [
        {
          imageUrl: '/images/item1.png',
          altText: 'Front View',
        },
        {
          imageUrl: '/images/item2.png',
          altText: 'Back View',
        },
      ],
      threeDView: '/3dviews/stylish-t-shirt.3d',
      category: 'Clothing',
      subCategory: 'Men',
      slug: 'formal-suit',
      addedDate: '2023-09-07',
      isFeatured: false,
      detailed_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget do lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget do lorem',
      materials: ['Silk'],
    },
    {
      id: 7,
      name: 'Running Shoes',
      description: 'High-performance running shoes for athletes.',
      price: 79.99,
      images: [
        {
          imageUrl: '/images/item1.png',
          altText: 'Front View',
        },
        {
          imageUrl: '/images/item2.png',
          altText: 'Back View',
        },
      ],
      threeDView: '/3dviews/stylish-t-shirt.3d',
      category: 'Footwear',
      subCategory: 'Women',
      slug: 'running-shoes',
      addedDate: '2023-08-31',
      isFeatured: false,
      detailed_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget do lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget do lorem',
      materials: ['Silk'],
    },
    {
      id: 8,
      name: 'Winter Jacket',
      description: 'A warm and stylish winter jacket for cold weather.',
      price: 69.99,
      images: [
        {
          imageUrl: '/images/item1.png',
          altText: 'Front View',
        },
        {
          imageUrl: '/images/item2.png',
          altText: 'Back View',
        },
      ],
      threeDView: '/3dviews/stylish-t-shirt.3d',
      category: 'Clothing',
      subCategory: 'Men',
      slug: 'winter-jacket',
      addedDate: '2023-08-30',
      isFeatured: false,
      detailed_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget do lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget do lorem',
      materials: ['Silk'],
    },
    {
      id: 9,
      name: 'Handbag',
      description: 'A fashionable handbag for carrying essentials.',
      price: 29.99,
      images: [
        {
          imageUrl: '/images/item1.png',
          altText: 'Front View',
        },
        {
          imageUrl: '/images/item2.png',
          altText: 'Back View',
        },
      ],
      threeDView: '/3dviews/stylish-t-shirt.3d',
      category: 'Accessories',
      subCategory: 'Women',
      slug: 'fashion-handbag',
      addedDate: '2023-08-29',
      isFeatured: false,
      detailed_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget do lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget do lorem',
      materials: ['Silk'],
    },
    {
      id: 10,
      name: 'Leather Belt',
      description: 'A classic leather belt to complement your outfit.',
      price: 14.99,
      images: [
        {
          imageUrl: '/images/item1.png',
          altText: 'Front View',
        },
        {
          imageUrl: '/images/item2.png',
          altText: 'Back View',
        },
      ],
      threeDView: '/3dviews/stylish-t-shirt.3d',
      category: 'Accessories',
      subCategory: 'Men',
      slug: 'classic-belt',
      addedDate: '2023-08-28',
      isFeatured: true, // Only this product is featured
      detailed_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget do lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, diam diam aliquet nunc, eget ultricies nisl nunc eget do lorem',
      materials: ['Silk'],
    },
    // Add more products as needed
  ],
};

export default data;

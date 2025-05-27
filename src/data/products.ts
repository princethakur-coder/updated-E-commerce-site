import { Product } from '../types';

// Generate 50+ products
export const products: Product[] = [
  // Fragrances
  {
    id: 1,
    name: 'Floral Eau de Parfum 1',
    price: 166,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg',
    size: '50ml',
    color: 'Woody',
    category: 'Fragrances',
    description: 'A luxurious floral scent with notes of jasmine and rose for a delicate, feminine fragrance.',
    features: ['Long-lasting formula', 'Handcrafted in small batches', 'Natural ingredients']
  },
  {
    id: 2,
    name: 'Floral Eau de Parfum 7',
    price: 33,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg',
    size: '30ml',
    color: 'Woody',
    category: 'Fragrances'
  },
  {
    id: 3,
    name: 'Floral Eau de Parfum 8',
    price: 53,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/4110099/pexels-photo-4110099.jpeg',
    size: '100ml',
    color: 'Floral',
    category: 'Fragrances'
  },
  {
    id: 4,
    name: 'Floral Eau de Parfum 9',
    price: 81,
    originalPrice: 102,
    discount: 21,
    image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg',
    size: '100ml',
    color: 'Spicy',
    category: 'Fragrances'
  },
  {
    id: 5,
    name: 'Floral Eau de Parfum 10',
    price: 108,
    originalPrice: 128,
    discount: 16,
    image: 'https://images.pexels.com/photos/4110337/pexels-photo-4110337.jpeg',
    size: '100ml',
    color: 'Floral',
    category: 'Fragrances'
  },
  
  // Luggage
  {
    id: 6,
    name: 'Luggage Set 9',
    price: 208,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg',
    size: 'Tote',
    color: 'White',
    category: 'Luggage',
    description: 'Premium luggage set with durable hard shell exterior and smooth spinner wheels.',
    features: ['TSA-approved lock', 'Expandable design', 'Telescoping handle', 'Water-resistant']
  },
  {
    id: 7,
    name: 'Travel Pouch 11',
    price: 38,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg',
    size: 'Suitcase',
    color: 'Black',
    category: 'Luggage'
  },
  {
    id: 8,
    name: 'Laptop Bag 9',
    price: 42,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/1231365/pexels-photo-1231365.jpeg',
    size: 'Suitcase',
    color: 'Black',
    category: 'Luggage'
  },
  
  // Fragrances continued
  {
    id: 9,
    name: 'Spicy Aroma 10',
    price: 25,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg',
    size: '30ml',
    color: 'Woody',
    category: 'Fragrances'
  },
  {
    id: 10,
    name: 'Golden Dawn 8',
    price: 80,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/3050729/pexels-photo-3050729.jpeg',
    size: '100ml',
    color: 'Spicy',
    category: 'Fragrances'
  },
  {
    id: 11,
    name: 'Golden Dawn 9',
    price: 79,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/3144214/pexels-photo-3144214.jpeg',
    size: '100ml',
    color: 'Floral',
    category: 'Fragrances'
  },
  {
    id: 12,
    name: 'Golden Dawn 10',
    price: 205,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg',
    size: '50ml',
    color: 'Woody',
    category: 'Fragrances'
  },
  {
    id: 13,
    name: 'Golden Dawn 11',
    price: 63,
    originalPrice: 95,
    discount: 34,
    image: 'https://images.pexels.com/photos/3144215/pexels-photo-3144215.jpeg',
    size: '50ml',
    color: 'Spicy',
    category: 'Fragrances'
  },
  {
    id: 14,
    name: 'Golden Dawn 12',
    price: 169,
    originalPrice: 219,
    discount: 23,
    image: 'https://images.pexels.com/photos/3144216/pexels-photo-3144216.jpeg',
    size: '30ml',
    color: 'Woody',
    category: 'Fragrances'
  },
  
  // Electronics
  {
    id: 15,
    name: 'Smart Watch Pro',
    price: 1299,
    originalPrice: 1499,
    discount: 13,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    size: 'One Size',
    color: 'Black',
    category: 'Electronics',
    description: 'Advanced smartwatch with health monitoring, notifications, and customizable watch faces.',
    features: ['Heart rate monitor', 'Sleep tracking', 'Water resistant', 'Long battery life']
  },
  {
    id: 16,
    name: 'Wireless Earbuds',
    price: 899,
    originalPrice: 1199,
    discount: 25,
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg',
    size: 'One Size',
    color: 'White',
    category: 'Electronics'
  },
  {
    id: 17,
    name: 'Portable Speaker',
    price: 499,
    originalPrice: 699,
    discount: 29,
    image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg',
    size: 'Compact',
    color: 'Black',
    category: 'Electronics'
  },
  
  // More fragrances
  {
    id: 18,
    name: 'Ocean Breeze',
    price: 120,
    originalPrice: 150,
    discount: 20,
    image: 'https://images.pexels.com/photos/2827393/pexels-photo-2827393.jpeg',
    size: '75ml',
    color: 'Fresh',
    category: 'Fragrances'
  },
  {
    id: 19,
    name: 'Midnight Essence',
    price: 85,
    originalPrice: 100,
    discount: 15,
    image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg',
    size: '50ml',
    color: 'Dark',
    category: 'Fragrances'
  },
  {
    id: 20,
    name: 'Citrus Delight',
    price: 65,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/3270224/pexels-photo-3270224.jpeg',
    size: '30ml',
    color: 'Citrus',
    category: 'Fragrances'
  },
  
  // More luggage
  {
    id: 21,
    name: 'Weekend Duffel',
    price: 159,
    originalPrice: 189,
    discount: 16,
    image: 'https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg',
    size: 'Medium',
    color: 'Brown',
    category: 'Luggage'
  },
  {
    id: 22,
    name: 'Carry-On Roller',
    price: 249,
    originalPrice: 299,
    discount: 17,
    image: 'https://images.pexels.com/photos/2347054/pexels-photo-2347054.jpeg',
    size: 'Cabin',
    color: 'Blue',
    category: 'Luggage'
  },
  {
    id: 23,
    name: 'Business Backpack',
    price: 129,
    originalPrice: 149,
    discount: 13,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg',
    size: 'Standard',
    color: 'Gray',
    category: 'Luggage'
  },
  
  // More electronics
  {
    id: 24,
    name: 'Noise-Canceling Headphones',
    price: 1599,
    originalPrice: 1899,
    discount: 16,
    image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg',
    size: 'Over-ear',
    color: 'Silver',
    category: 'Electronics'
  },
  {
    id: 25,
    name: 'Fitness Tracker',
    price: 799,
    originalPrice: 999,
    discount: 20,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    size: 'One Size',
    color: 'Red',
    category: 'Electronics'
  },
  
  // Fragrances continued
  {
    id: 26,
    name: 'Mountain Pine',
    price: 95,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/932587/pexels-photo-932587.jpeg',
    size: '100ml',
    color: 'Woody',
    category: 'Fragrances'
  },
  {
    id: 27,
    name: 'Lavender Dreams',
    price: 75,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/3059611/pexels-photo-3059611.jpeg',
    size: '50ml',
    color: 'Floral',
    category: 'Fragrances'
  },
  {
    id: 28,
    name: 'Summer Breeze',
    price: 110,
    originalPrice: 130,
    discount: 15,
    image: 'https://images.pexels.com/photos/2827395/pexels-photo-2827395.jpeg',
    size: '75ml',
    color: 'Fresh',
    category: 'Fragrances'
  },
  {
    id: 29,
    name: 'Royal Oud',
    price: 195,
    originalPrice: 220,
    discount: 11,
    image: 'https://images.pexels.com/photos/3012112/pexels-photo-3012112.jpeg',
    size: '50ml',
    color: 'Woody',
    category: 'Fragrances'
  },
  {
    id: 30,
    name: 'Amber Rose',
    price: 88,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/3059610/pexels-photo-3059610.jpeg',
    size: '30ml',
    color: 'Floral',
    category: 'Fragrances'
  },
  
  // More luggage
  {
    id: 31,
    name: 'Travel Organizer',
    price: 45,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg',
    size: 'Small',
    color: 'Black',
    category: 'Luggage'
  },
  {
    id: 32,
    name: 'Passport Holder',
    price: 25,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg',
    size: 'Standard',
    color: 'Brown',
    category: 'Luggage'
  },
  {
    id: 33,
    name: 'Luggage Tag Set',
    price: 15,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/989941/pexels-photo-989941.jpeg',
    size: 'Standard',
    color: 'Multi',
    category: 'Luggage'
  },
  
  // More electronics
  {
    id: 34,
    name: 'Power Bank 20000mAh',
    price: 699,
    originalPrice: 899,
    discount: 22,
    image: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg',
    size: 'Compact',
    color: 'Black',
    category: 'Electronics'
  },
  {
    id: 35,
    name: 'Bluetooth Speaker',
    price: 599,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg',
    size: 'Medium',
    color: 'Blue',
    category: 'Electronics'
  },
  
  // More fragrances
  {
    id: 36,
    name: 'Vanilla Noir',
    price: 85,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/965991/pexels-photo-965991.jpeg',
    size: '50ml',
    color: 'Sweet',
    category: 'Fragrances'
  },
  {
    id: 37,
    name: 'Citrus Splash',
    price: 70,
    originalPrice: 85,
    discount: 18,
    image: 'https://images.pexels.com/photos/3059608/pexels-photo-3059608.jpeg',
    size: '100ml',
    color: 'Citrus',
    category: 'Fragrances'
  },
  {
    id: 38,
    name: 'Sandalwood Essence',
    price: 125,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/932577/pexels-photo-932577.jpeg',
    size: '75ml',
    color: 'Woody',
    category: 'Fragrances'
  },
  
  // More items to reach 50+
  {
    id: 39,
    name: 'Travel Pillow',
    price: 35,
    originalPrice: 45,
    discount: 22,
    image: 'https://images.pexels.com/photos/6068961/pexels-photo-6068961.jpeg',
    size: 'One Size',
    color: 'Gray',
    category: 'Travel Accessories'
  },
  {
    id: 40,
    name: 'Eye Mask',
    price: 18,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/6069025/pexels-photo-6069025.jpeg',
    size: 'One Size',
    color: 'Black',
    category: 'Travel Accessories'
  },
  {
    id: 41,
    name: 'Wireless Charger',
    price: 499,
    originalPrice: 599,
    discount: 17,
    image: 'https://images.pexels.com/photos/4526461/pexels-photo-4526461.jpeg',
    size: 'Standard',
    color: 'White',
    category: 'Electronics'
  },
  {
    id: 42,
    name: 'Travel Adapter',
    price: 299,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/6069051/pexels-photo-6069051.jpeg',
    size: 'Compact',
    color: 'White',
    category: 'Travel Accessories'
  },
  {
    id: 43,
    name: 'Digital Luggage Scale',
    price: 175,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/6069072/pexels-photo-6069072.jpeg',
    size: 'Pocket',
    color: 'Black',
    category: 'Travel Accessories'
  },
  {
    id: 44,
    name: 'Rose Water Spray',
    price: 40,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/3737576/pexels-photo-3737576.jpeg',
    size: '100ml',
    color: 'Pink',
    category: 'Fragrances'
  },
  {
    id: 45,
    name: 'Unisex Cologne',
    price: 95,
    originalPrice: 120,
    discount: 21,
    image: 'https://images.pexels.com/photos/4110151/pexels-photo-4110151.jpeg',
    size: '50ml',
    color: 'Fresh',
    category: 'Fragrances'
  },
  {
    id: 46,
    name: 'Travel Journal',
    price: 25,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/6069011/pexels-photo-6069011.jpeg',
    size: 'A5',
    color: 'Brown',
    category: 'Travel Accessories'
  },
  {
    id: 47,
    name: 'Camera Strap',
    price: 15,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg',
    size: 'Adjustable',
    color: 'Black',
    category: 'Travel Accessories'
  },
  {
    id: 48,
    name: 'Packing Cubes Set',
    price: 45,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/6069088/pexels-photo-6069088.jpeg',
    size: 'Assorted',
    color: 'Blue',
    category: 'Travel Accessories'
  },
  {
    id: 49,
    name: 'Travel Bottle Set',
    price: 30,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/6068970/pexels-photo-6068970.jpeg',
    size: '100ml',
    color: 'Clear',
    category: 'Travel Accessories'
  },
  {
    id: 50,
    name: 'Leather Wallet',
    price: 55,
    originalPrice: 70,
    discount: 21,
    image: 'https://images.pexels.com/photos/2506353/pexels-photo-2506353.jpeg',
    size: 'Standard',
    color: 'Brown',
    category: 'Travel Accessories'
  },
  {
    id: 51,
    name: 'Wireless Earphones',
    price: 899,
    originalPrice: 1299,
    discount: 31,
    image: 'https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg',
    size: 'One Size',
    color: 'Black',
    category: 'Electronics'
  },
  {
    id: 52,
    name: 'Smart Water Bottle',
    price: 399,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/4526430/pexels-photo-4526430.jpeg',
    size: '500ml',
    color: 'Silver',
    category: 'Travel Accessories'
  },
  {
    id: 53,
    name: 'Hand Sanitizer',
    price: 10,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/4197560/pexels-photo-4197560.jpeg',
    size: '60ml',
    color: 'Clear',
    category: 'Travel Accessories'
  },
  {
    id: 54,
    name: 'Beard Oil',
    price: 35,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg',
    size: '30ml',
    color: 'Amber',
    category: 'Fragrances'
  },
  {
    id: 55,
    name: 'Hair Mist',
    price: 45,
    originalPrice: 0,
    discount: 0,
    image: 'https://images.pexels.com/photos/4110112/pexels-photo-4110112.jpeg',
    size: '75ml',
    color: 'Floral',
    category: 'Fragrances'
  }
];

// Add multiple images for some products
products.forEach(product => {
  if (product.id % 5 === 0) {
    product.images = [
      product.image,
      'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg',
      'https://images.pexels.com/photos/3059611/pexels-photo-3059611.jpeg',
      'https://images.pexels.com/photos/3059610/pexels-photo-3059610.jpeg',
    ];
  }
});
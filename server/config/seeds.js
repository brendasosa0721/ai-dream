const db = require('./connection');
const { Product, Category, BusinessCategory, BusinessType } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Credits' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: '50',
      description:
        '50 credits for creations.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 5,
      quantity: 100
    },
    {
      name: '150',
      description:
        '150 credits for creations.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 15,
      quantity: 100
    },
    {
      name: '350',
      description:
        '350 credits for creations.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 35,
      quantity: 100
    }
  ]);

  console.log('products seeded');

  await BusinessCategory.deleteMany();

  const businessCategory = await BusinessCategory.insertMany([
    { name: 'Automotive' },
    { name: 'Business Support & Supplies' },
    { name: 'Computers & Electronics' },
    { name: 'Construction & Contractors' },
    { name: 'Education' },
    { name: 'Food & Dining' },
    { name: 'Health & Medicine' }
    
  ]);

  console.log('businessCategory seeded');

  await BusinessType.deleteMany();

  const businessType = await BusinessType.insertMany([
    {
      title: 'Auto Accessories',
      businessCategory: businessCategory[0]._id,
    },
    {
      title: 'Auto Dealers',
      businessCategory: businessCategory[0]._id,
    },
    {
      title: 'Detail & Carwash',
      businessCategory: businessCategory[0]._id,
    },
    {
      title: 'Consultants',
      businessCategory: businessCategory[1]._id,
    },
    {
      title: 'Marketing & Communications',
      businessCategory: businessCategory[1]._id,
    },
    {
      title: 'Office Supplies',
      businessCategory: businessCategory[1]._id,
    },
    {
      title: 'Computer Programming & Support',
      businessCategory: businessCategory[2]._id,
    },
    {
      title: 'Consumer Electronics & Accessories',
      businessCategory: businessCategory[2]._id,
    },
    {
      title: 'Architects',
      businessCategory: businessCategory[3]._id,
    },
    {
      title: 'Construction',
      businessCategory: businessCategory[3]._id,
    },
    {
      title: 'Electricians',
      businessCategory: businessCategory[3]._id,
    },
    {
      title: 'Architects',
      businessCategory: businessCategory[3]._id,
    },
    {
      title: 'Adult & Continuing Education',
      businessCategory: businessCategory[4]._id,
    },
    {
      title: 'Early Childhood Education',
      businessCategory: businessCategory[4]._id,
    },
    {
      title: 'Grocery, Beverage & Tobacco',
      businessCategory: businessCategory[5]._id,
    },
    {
      title: 'Fast Food & Carry Out',
      businessCategory: businessCategory[5]._id,
    },
    {
      title: 'Restaurants',
      businessCategory: businessCategory[5]._id,
    },
    {
      title: 'Clinics & Medical Centers',
      businessCategory: businessCategory[6]._id,
    },
    {
      title: 'Dental',
      businessCategory: businessCategory[6]._id,
    },
    {
      title: 'Diet & Nutrition',
      businessCategory: businessCategory[6]._id,
    }
  ]);

  console.log('businessType seeded');
  process.exit();
});

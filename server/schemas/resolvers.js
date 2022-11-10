const api = require('../utils/api');
const { User, Creation, Product, Category, Order, BusinessCategory, BusinessType } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('creations');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('creations');
    },
    creations: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Creation.find(params).sort({ createdAt: -1 });
    },
    creation: async (parent, { _id }) => {
      return Creation.findOne({ _id });
    },
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    // user: async (parent, args, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: 'orders.products',
    //       populate: 'category'
    //     });

    //     user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

    //     return user;
    //   }

    //   throw new AuthenticationError('Not logged in');
    // },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const { products } = await order.populate('products').execPopulate();
      const line_items = [];

      for (let i = 0; i < products.length; i++) {
        // generate product id
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        // generate price id using the product id
        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        // add price id to the line items array
        line_items.push({
          price: price.id,
          quantity: 1
        });
      };
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });
      return { session: session.id };
    },
    businessCategories: async () => {
      return await BusinessCategory.find();
    },
    businessTypes: async (parent, { businessCategory, name }) => {
      const params = {};

      if (businessCategory) {
        params.businessCategory = businessCategory;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await BusinessType.find(params).populate('businessCategory');
    },
    api: async (parent, args, context) => {
      console.log(args.promptInput);
      // if (context.user) {
      const response = await api.generateImage({
        prompt: args.promptInput
      });
      return response
      // }

      // throw new AuthenticationError('Not logged in');
    }
  },
  

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addCreation: async (parent, args, context) => {
      console.log(context.user.username);
      if (context.user) {
        const creation = await Creation.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { creations: creation._id } },
          { new: true }
        );

        return creation;
      }
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    addBusinessCategory: async (parent, args) => {
      const businessCategory = await BusinessCategory.create(args);
      return { businessCategory };
    },
    addBusinessType: async (parent, args) => {
      const businessType = await BusinessType.create(args);
      return { businessType };
    },
  }

};

module.exports = resolvers;

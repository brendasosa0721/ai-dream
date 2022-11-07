const { User, Creation } = require('../models');
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
    }
  }

};

module.exports = resolvers;

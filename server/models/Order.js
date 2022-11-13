const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],

  userId: {
    type: String,
    required: true,
    unique: true,
  },

  sessionId: {
    type: String,
  },

  status: {
    type: String,
    default: "unpaid"
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

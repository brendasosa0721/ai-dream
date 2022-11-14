const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true  
  },
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

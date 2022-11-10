const mongoose = require('mongoose');

const { Schema } = mongoose;

const businessTypeSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  businessCategory: {
    type: Schema.Types.ObjectId,
    ref: 'BusinessCategory',
    required: true
  }
});

const BusinessType = mongoose.model('BusinessType', businessTypeSchema);

module.exports = BusinessType;

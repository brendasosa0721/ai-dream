const mongoose = require('mongoose');

const { Schema } = mongoose;

const businessCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  }
});

const BusinessCategory = mongoose.model('BusinessCategory', businessCategorySchema);

module.exports = BusinessCategory;

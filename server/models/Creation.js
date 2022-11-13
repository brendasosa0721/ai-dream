const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const creationSchema = new Schema(
  {
    creationText: {
      type: String,
      minlength: 1,
      maxlength: 280
    },
    creationUrl: {
      type: String,
      minlength: 1,
      maxlength: 280,
      unique: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);


const Creation = model('Creation', creationSchema);

module.exports = Creation;

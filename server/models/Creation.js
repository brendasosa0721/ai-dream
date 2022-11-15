const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const creationSchema = new Schema(
  {
    creationUrl: {
      creationUrl: {
      type: String,
      minlength: 1,
      maxlength: 2048,
      unique: true
      }
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
  }
);


const Creation = model('Creation', creationSchema);

module.exports = Creation;

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  __v: {
    type: Number,
    select: false
  }
})

module.exports = mongoose.model('Product', productSchema);
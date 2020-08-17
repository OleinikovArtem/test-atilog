const Product = require("../modules/Product");

// GET
module.exports.findAll = id => Product.find({})

module.exports.findById = id => Product.findById(id)

module.exports.findByIdAndUpdate = ({ _id, title, price, description }) =>
  Product.findByIdAndUpdate({ _id: prod._id }, { $set: { title, price, description } })


// POST
module.exports.addProduct = ({ title, price, description, imageUrl }) => Product.create({ title, price, description, imageUrl })

module.exports.removeProduct = id => Product.findByIdAndRemove(id)

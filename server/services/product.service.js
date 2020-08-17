const Product = require("../modules/Product");

// GET
module.exports.findAll = id => Product.find({})

module.exports.findById = id => Product.findById(id)

module.exports.findByIdAndUpdate = (prod) =>
  Product.findByIdAndUpdate({ _id: prod._id }, { $set: { title: prod.title, price: prod.price } })


// POST
module.exports.addProduct = (prod) => Product.create({ title: prod.title, price: prod.price })

module.exports.removeProduct = id => Product.findByIdAndRemove(id)

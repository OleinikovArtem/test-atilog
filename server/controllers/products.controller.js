const { findAll, findById, findByIdAndUpdate, addProduct, removeProduct } = require('../services/product.service')


// GET
module.exports.getAllProducts = (req, res, next) => {
  findAll().then((data) => {
    res.json(data)
  })
}

module.exports.getProduct = (req, res, next) => {
  const { id } = req.params
  findById(id)
    .then((prod) => {
      console.log(JSON.stringify(prod, null, 2))
      res.json(prod)
    })
}

// POST
module.exports.addProduc = (req, res, next) => {
  const { title, price } = req.body
  addProduct({ title, price })
    .then(() => {
      console.log('Created product is done!')
      res.json({ message: 'Product was created!' })
    })
}

module.exports.removeProduct = (req, res, next) => {
  const { id } = req.params
  removeProduct(id)
    .then(() => {
      console.log('Deleted product is done!')
      res.json({ message: 'Product was Deleted!' })
    })
}

// PUT
module.exports.updateProduct = (req, res, next) => {
  const { title, price, _id } = req.body
  findByIdAndUpdate({ title, price, _id })
    .then(() => {
      console.log('Updated product is done!')
      res.json({ message: 'Product was updated!' })
    })
}
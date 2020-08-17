const express = require('express')
const { getAllProducts, addProduc, updateProduct, removeProduct, getProduct } = require('../controllers/products.controller')

const router = express.Router()

// GET
router.get('/', getAllProducts)
router.get('/:id', getProduct)

// POST
router.post('/', addProduc)
router.post('/:id', removeProduct)

// PUT
router.put('/', updateProduct)

module.exports = router

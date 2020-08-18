import React, { useEffect } from 'react'
import { useState } from 'react'
import API from '../../utils/API'
import { Product } from '../Product'

import '../../scss/Product.scss'

export const ProductList = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    API.get()
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const removeProduct = (_id) => {
    API.post(`/${_id}`)
      .then(res => {
        setProducts(res.data.products)
        console.log(res.data.message)
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <ul className='product-list'>
      {products.map(prod => <Product key={prod._id} {...prod} removeProduct={removeProduct} />)}
    </ul>
  )
}

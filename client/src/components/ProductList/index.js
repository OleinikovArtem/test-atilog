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
  }, [])

  return (
    <ul className='product-list'>
      {products.map(prod => <Product key={prod._id} {...prod} />)}
    </ul>
  )
}

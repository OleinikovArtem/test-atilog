import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import API from '../../utils/API'

export const DetailProduct = () => {
  const [product, setProduct] = useState(null)
  const { _id } = useParams()

  useEffect(() => {
    API.get(`/${_id}`)
      .then(res => {
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [_id])

  if (!product) {
    return (
      <Layout titleNavbar='Product'>
        <h1>Product not found!</h1>
      </Layout>
    )
  }

  return (
    <Layout titleNavbar='Product'>
      <div className='details-product'>
        <h1>Info Product</h1>
        <h2>{product.title}</h2>
        <div className='details-product__main'>
          <div className="details-product__image-box">
            <img src={product.imageUrl} alt="" />
          </div>
          <p>{product.description}</p>
        </div>
      </div>
    </Layout>
  )
}

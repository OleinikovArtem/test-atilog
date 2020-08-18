import React from 'react'
import { Layout } from '../../components/Layout'
import { ProductForm } from '../../components/ProductForm'
import '../../scss/Form-product.scss'

export const FormProductPage = () => {

  return (
    <Layout titleNavbar='Add Product'>
      <ProductForm />
    </Layout>
  )
}

import React from 'react'
import { Layout } from '../../components/Layout'
import { ProductForm } from '../../components/ProductForm'


export const FormProductPage = () => {

  return (
    <Layout titleNavbar='Add Product'>
      <ProductForm />
    </Layout>
  )
}

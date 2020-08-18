import React from 'react'
import { Layout } from '../../components/Layout'
import { ProductList } from '../../components/ProductList/'

export const AppPage = () => {
  return (
    <Layout titleNavbar='Home'>
      <ProductList />
    </Layout>
  )
}

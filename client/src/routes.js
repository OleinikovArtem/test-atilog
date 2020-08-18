import { AppPage } from './pages/App/'
import { ProductPage } from './pages/Product/'
import { FormProductPage } from './pages/FormProductPage/'

export const urls = {
  home: '/',
  product: '/product-details/:_id',
  editProduct: '/product/edit/:_id',
  addProduct: '/product/create/0'
}

export const routes = [
  {
    key: 'home',
    exact: true,
    path: urls.home,
    component: AppPage
  },
  {
    key: 'add-product',
    exact: true,
    path: urls.addProduct,
    component: FormProductPage
  },
  {
    key: 'edit-product',
    exact: true,
    path: urls.editProduct,
    component: FormProductPage
  },
  {
    key: 'product',
    exact: true,
    path: urls.product,
    component: ProductPage
  },
]
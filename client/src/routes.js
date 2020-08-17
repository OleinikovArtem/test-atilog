import { AppPage } from './pages/App/'
import { ProductPage } from './pages/Product/'

export const urls = {
  home: '/',
  product: '/product/:id',
}

export const routes = [
  {
    key: 'home',
    exact: true,
    path: urls.home,
    component: AppPage
  },
  {
    key: 'product',
    exact: false,
    path: urls.product,
    component: ProductPage
  },
]
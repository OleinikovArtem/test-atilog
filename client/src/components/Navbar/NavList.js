import React from 'react'
import { NavItem } from './NavItem'
import { urls } from '../../routes'


export const NavList = () => {
  return (
    <nav className='nav'>
      <NavItem to={urls.home}>
        Home
      </NavItem >
      {/* <NavItem to={urls.product}>
        Product
      </NavItem > */}
      <NavItem to={urls.addProduct}>
        Add Product
      </NavItem >

    </nav>
  )
}

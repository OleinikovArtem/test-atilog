import React from 'react'
import { NavItem } from './NavItem'
import { urls } from '../../routes'


export const NavList = ({ closeMenu }) => {
  return (
    <nav className='nav'>
      <NavItem to={urls.home} onClick={closeMenu}>
        Home
      </NavItem >
      <NavItem to={urls.addProduct} onClick={closeMenu}>
        Add Product
      </NavItem >

    </nav>
  )
}

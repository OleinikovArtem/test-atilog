import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavItem = ({ children, to }) => {
  return (
    <NavLink to={to} className='nav__link' exact>
      {children}
    </NavLink>
  )
}

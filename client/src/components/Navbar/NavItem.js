import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavItem = ({ children, to, onClick }) => {
  return (
    <NavLink to={to} className='nav__link' exact onClick={onClick}>
      {children}
    </NavLink>
  )
}

import React, { useState } from 'react'
import { NavList } from './NavList'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'


export const Navbar = ({ titleNavbar }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleOpenMenu = () => setIsOpenMenu(!isOpenMenu)

  return (
    <div className='navbar'>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={handleOpenMenu}
            edge="start"
            className='navbar__toggle-menu'
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className='navbar__title'>
            {titleNavbar}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        {isOpenMenu && <NavList />}
      </AppBar>
    </div>
  )
}
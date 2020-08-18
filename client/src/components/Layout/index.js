import React, { Fragment } from 'react'
import { Container } from '@material-ui/core'
import { Navbar } from '../Navbar/'

export const Layout = ({ children, titleNavbar }) => {
  return (
    <Fragment>
      <header>
        <Navbar titleNavbar={titleNavbar} />
      </header>
      <Container>
        {children}
      </Container>
    </Fragment>
  )
}

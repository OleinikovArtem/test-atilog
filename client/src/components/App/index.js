import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { routes } from '../../routes'

export const App = () => {
 
  return (
    <BrowserRouter>
      {routes.map(({ path, exact, key, component }) =>
        <Route key={key} path={path} exact={exact} component={component} />)}
    </BrowserRouter>
  )
}

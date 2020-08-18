import React from 'react'
import Alert from '@material-ui/lab/Alert'
import { IconButton } from '@material-ui/core/'
import CloseIcon from '@material-ui/icons/Close'

export const AlertMessage = ({ children, type, closeAlert }) => {
  return (
    <Alert
      variant="outlined"
      severity={type}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={closeAlert}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
    >
      {children}
    </Alert>
  )
}

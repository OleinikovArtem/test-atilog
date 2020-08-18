import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core/'
import API from '../../utils/API'
import { AlertMessage } from '../Alert'

export const ProductForm = () => {
  const [values, setValues] = useState({
    title: '',
    description: '',
    imageUrl: '',
    price: ''
  })
  const [alert, setAlert] = useState(null)
  const { _id } = useParams()


  useEffect(() => {
    if (_id) {
      API.get(`/${_id}`)
        .then(res => {
          const { title, description, imageUrl, price } = res.data
          setValues({
            title, description, imageUrl, price
          })
        })
    }
  }, [_id])

  const handleChange = (e) => {
    e.preventDefault()
    const updateValues = {
      ...values,
      [e.target.name]: e.target.value
    }
    setValues(updateValues)
  }

  const createProduct = (e) => {
    e.preventDefault()
    const { title, price, description, imageUrl } = values

    API.post('/', { title, price, description, imageUrl })
      .then(res => {
        setAlert({ message: res.data.message, type: 'success' })
        resetVales()
      }).catch(err => {
        setAlert({ message: err.message, type: 'error' })
      })
  }

  const updateProduct = (e) => {
    e.preventDefault()
    API.put('/', { ...values, _id })
      .then(res => {
        setAlert({ message: res.data.message, type: 'success' })
      })
      .catch(err => {
        setAlert({ message: err.message, type: 'error' })
      })
  }

  const resetVales = () => {
    setValues({
      title: '',
      description: '',
      imageUrl: '',
      price: ''
    })
  }

  const clearMessage = () => setAlert(null)

  return (
    <Fragment>
      <h1>Add Product Page</h1>
      <form action='' className='Form-product' onSubmit={_id ? updateProduct : createProduct}>
        <TextField
          label='Title'
          name='title'
          variant='outlined'
          value={values.title}
          onChange={handleChange}
        />
        <TextField
          label='Image Url'
          name='imageUrl'
          variant='outlined'
          value={values.imageUrl}
          onChange={handleChange}
        />
        <TextField
          label='Description'
          name='description'
          variant='outlined'
          onChange={handleChange}
          value={values.description}
        />
        <TextField
          label='Price'
          name='price'
          variant='outlined'
          onChange={handleChange}
          value={values.price}
        />
        <div className='Form-product__btn-wrap'>
          <Button variant='outlined' color='primary' type='submit'>
            {_id ? 'Edit Product' : 'Create Product'}
          </Button>
          <Button variant='outlined' color='secondary' onClick={resetVales}>
            Resset Fields
          </Button>
        </div>
        {alert && <AlertMessage type={alert.type} closeAlert={clearMessage}>{alert.message}</AlertMessage>}
      </form>
    </Fragment>
  )
}

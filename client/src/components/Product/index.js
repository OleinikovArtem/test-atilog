import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export const Product = ({ _id, title, description, price, imageUrl, removeProduct }) => {
  const history = useHistory()

  const goEditProduct = () => history.push(`/product/edit/${_id}`)
  const handleRemoveProduct = () => removeProduct(_id)

  return (
    <Card className='product'>
      <CardActionArea>
        <CardMedia
          className='product__img'
          image={imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title} ( ${price} )
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={goEditProduct}>
          Edit
        </Button>
        <Button size="small" color="primary" onClick={handleRemoveProduct}>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}
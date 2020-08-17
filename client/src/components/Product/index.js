import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Card, CardActionArea, CardContent, CardActions, CardMedia, Button, Typography} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

export const Product = ({ title = 'lizard', description = 'somthing text',  price = 10, imageUrl = 'https://pmcdeadline2.files.wordpress.com/2020/04/axios.png?w=1024' }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
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
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}
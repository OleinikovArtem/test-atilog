const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Product = require('./modules/Product')
const {PORT, MONGO_PASSWORD} = require('dotenv').config({ path: __dirname + '/.env'}).parsed

const productsRouter = require('./routers/products.router')

const port = PORT || 4200
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api/products', productsRouter)

mongoose
  .connect(
    `mongodb+srv://admin:${MONGO_PASSWORD}@cluster0.j9omw.mongodb.net/db?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(result => {
    app.listen(port, () => {
      console.log(`Server has been runnign from localhost:${port}/`)
    })
  })
  .catch(err => {
    console.log(err)
  })

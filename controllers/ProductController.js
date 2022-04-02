const express = require('express')
const response = require('../utils/response')
const Product = require('../models/ProductModel')

const router = express.Router()

router
  .get('/', async (req, res) => {
    const data = await Product.getAll()

    response.send(res, data)
  })

  .post('/category/:name', async (req, res) => {
    let name = req.params.name
    let catId = req.body.id
    const data = await Product.getByCategoryName(catId, name)

    response.send(res, data)
  })

  .post('/variant', async (req, res) => {
    const data = await Product.getVariant(req.body)

    response.send(res, data)
  })

  .post('/', async (req, res) => {
    const data = await Product.store(req.body)

    response.send(res, data)
  })

module.exports = router

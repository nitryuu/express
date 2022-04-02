const express = require('express')
const response = require('../utils/response')
const Category = require('../models/CategoryModel')

const router = express.Router()

router
  .get('/', async (req, res) => {
    const data = await Category.getAll()

    response.send(res, data)
  })

  .get('/:id', async (req, res) => {
    let id = req.params.id
    const data = await Category.getById(id)

    response.send(res, data)
  })

  .get('/catstore/:id', async (req, res) => {
    let id = req.params.id
    const data = await Category.getByCatStoreId(id)

    response.send(res, data)
  })

module.exports = router

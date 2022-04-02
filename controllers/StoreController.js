const express = require('express')
const response = require('../utils/response')
const Store = require('../models/StoreModel')

const router = express.Router()

router
  .get('/', async (req, res) => {
    const data = await Store.getAll()

    response.send(res, data)
  })

  .get('/:id', async (req, res) => {
    let id = req.params.id
    const data = await Store.getById(id)

    response.send(res, data)
  })

module.exports = router

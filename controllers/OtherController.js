const express = require('express')
const response = require('../utils/response')
const Other = require('../models/OtherModel')

const router = express.Router()

router.get('/', async (req, res) => {
  const data = await Other.getAll()

  response.send(res, data)
})

module.exports = router

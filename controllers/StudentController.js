const express = require('express')
const response = require('../utils/response')
const Student = require('../models/StudentModel')

const router = express.Router()

router
  .get('/', async (req, res) => {
    const data = await Student.getAll()

    response.send(res, data)
  })

  .post('/', async (req, res) => {
    const data = await Student.store(req.body)

    response.send(res, data)
  })

module.exports = router

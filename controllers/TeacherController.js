const express = require('express')
const response = require('../utils/response')
const Teacher = require('../models/TeacherModel')

const router = express.Router()

router
  .get('/', async (req, res) => {
    const data = await Teacher.getAll()

    response.send(res, data)
  })

  .post('/', async (req, res) => {
    const data = await Teacher.store(req.body)

    response.send(res, data)
  })

module.exports = router

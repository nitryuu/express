const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')
const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
routes(app)

app.listen(port, () => console.log(`Server is running on port ${port}!`))

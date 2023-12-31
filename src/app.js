const express = require('express')
const path = require('path')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

configViewEngine(app)
app.use('/', webRoute)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
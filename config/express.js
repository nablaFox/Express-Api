const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

/**
* Express instance
* @public
*/

const app = express()

app.use(cors())
app.use(bodyParser.json())

module.exports = app;



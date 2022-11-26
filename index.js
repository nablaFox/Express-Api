const app = require("./config/express")
const mongoose = require("./config/mongoose")
const logger = require("./config/logger")

const { port, env } = require('./config/vars')

mongoose.connect()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    logger.info(`server started on port ${port} (${env})`)
})
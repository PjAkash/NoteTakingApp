const express = require('express')

// const db = require('./config/db')
const { router } = require('./routes/router')

const app = express()
const port = 3000

// to parsee the body (in json format) sent in the request
app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`)
})

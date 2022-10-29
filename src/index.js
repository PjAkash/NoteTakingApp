const db = require('./db')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)

  await db
    .init()
    .then(cool => {
      console.log("cool");
    })
    .catch(err => {
      console.log("jamaica")
    })
})

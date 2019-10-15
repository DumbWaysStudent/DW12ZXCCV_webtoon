const express = require('express')
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken")
require('express-group-routes')

const webtoonRoutes = require('./routes/webtoon')
const userRoutes = require('./routes/user')

const app = express()
app.use(bodyParser.json())

const port = 5000

app.group("/api/v1", (routing) => {
  routing.use('/webtoons',webtoonRoutes)
  routing.use('/user',userRoutes)
})


app.listen(port, () => console.log(`Listening on port ${port}!`))

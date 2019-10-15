
const express = require('express')
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken")
require('express-group-routes')

const webtoonController = require('./controllers/webtoonController')
const userController = require('./controllers/userController')
const episodesController = require('./controllers/episodeController')

const app = express()
app.use(bodyParser.json())

const port = 5000

const  { isAuthenticated } = require("./middleware");

app.group("/api/v1", (router) => {

  // api for webtton
  router.get('/webtoons',webtoonController.show)
  router.get('/webtoons/:id/episodes',webtoonController.episode)
  // router.post('/webtoons',webtoonController.store)
  // router.delete('/webtoons/:id/delete',webtoonController.destroy)
  // router.patch('/webtoons/:id/update',webtoonController.update)
  // router.get('/webtoons/favorite',webtoonController.favorite)

  // api for authentication
  router.post("/register",userController.register)
  router.post("/login",userController.login)

  // api for episode
  // router.get('/webtoons/:id/episode/:episode_id',episodesController.showWithChapter);

})


app.listen(port, () => console.log(`Listening on port ${port}!`))

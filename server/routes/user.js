const user = require('express').Router()
const userController = require('../controllers/userController')

const middleware = require('../middleware')

const authMiddleware = [middleware.auth,middleware.verifyToken]


user.post("/register",userController.register)
user.post("/login",userController.login)
user.get("/:id/webtoons",authMiddleware,userController.myWebtton);
user.get("/:id/webtoon/:webtoon_id/episodes",authMiddleware,userController.episode);
user.post("/:id/webtoon",authMiddleware,userController.createMyWebtoon);

module.exports = user;

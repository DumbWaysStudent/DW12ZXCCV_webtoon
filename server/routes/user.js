const user = require('express').Router()
const userController = require('../controllers/userController')

const middleware = require('../middleware')

const authMiddleware = [middleware.auth,middleware.verifyToken]


user.post("/register",userController.register)
user.post("/login",userController.login)
user.get("/:id/webtoons",authMiddleware,userController.myWebtton);
module.exports = user;

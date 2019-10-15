const auth = require('express').Router()
const userController = require('../controllers/userController')

auth.post("/register",userController.register)
auth.post("/login",userController.login)

module.exports = auth;

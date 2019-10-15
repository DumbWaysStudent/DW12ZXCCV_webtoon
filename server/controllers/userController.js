const bcyrpt = require('bcrypt')
const jwt = require("jsonwebtoken")
const models = require('../models')
const User  = models.user
const saltRounds  = 10

module.exports = {
  register : (req,res) => {
    let {name,email,password} = req.body
    bcyrpt.genSalt(saltRounds, function(err, salt) {
      bcyrpt.hash(password, salt, function(err, hash) {
        User.create({
          name,
          email,
          password: hash
        }).then(user => {
           const token = jwt.sign({ id : user.id }, 'wkwkwkwk')
          res.send({
            message : 'success',
            token,
            user
          })
        })
      })
  })
},

  login : (req,res) => {
    let {email,password} = req.body

    User.findOne({
      where: {
        email
      }
    }).then(user => {
      if(!user) {
        return res.status(400).json({
          message : "wrong email"
        })
      }else{
        bcyrpt.compare(password,user.password).then(result => {
          if(result){
            const token = jwt.sign({ user_id : user.id }, 'my-secret-key')
            res.send({
            })
          }else{
            return res.status(500).json({
              message : 'Wrong password'
            })
          }
        })
      }

    });
  }

}

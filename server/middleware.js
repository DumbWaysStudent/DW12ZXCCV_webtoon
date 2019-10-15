const jwt = require('jsonwebtoken');

module.exports = {
  auth : (req,res,next) => {
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(' ')
      const bearerToken = bearer[1]
      req.token = bearerToken
      next();
    }else{
      res.send({
        message : 'forbidden'
      })
    }
  },
  verifyToken : (req,res,next) => {
    jwt.verify(req.token,'my-secret-key',(err,auth) => {
      if(err){
        res.status(403)
      }else{
        next();
      }
    })
  }
}

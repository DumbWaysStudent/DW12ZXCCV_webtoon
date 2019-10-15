const models = require('../models');
const User  = models.user
const Genre = models.genre
const Webtoon = models.webtoon
const Episode = models.episode
const Favorite = models.favorite

module.exports = {

  show : (req,res) => {
    Webtoon.findAll({
       include: [{
           as: "user",
           model: User
       },
       {
           as: "genre",
           model: Genre
       }
     ]
   }).then(webtoons=>res.send(webtoons))
 },

 store : (req,res) => {
   Webtoon.create(req.body).then(todo => {
     res.send({
       message : 'success',
       todo
     })
   })
 },

 destroy : (req,res) => {
   let {id} = req.params
   Webtoon.destroy({
     where : {
       id
     }
   }).then(webtoon => res.send({
     message : 'success',
     webtoon
   }))
 },

 update : (req,res) => {
   Webtoon.update(
     req.body,
     {where : {id : req.params.id}}
   ).then(webtoon => {
     res.send({
       message : "success",
       webtoon
     })
   })
 },

 episode : (req,res) => {
   let { id } = req.params
   Webtoon.findAll({
     where: {
       id
     },
     include: [{
         as: "episodes",
         model: Episode
     }]
   }).then(webtoons=>res.send(webtoons[0].episodes))
 },

 favorite : (req,res) => {
   Favorite.findAll({
     where : {
       user_id : 12
     },
     include : ['webtoon','user']
   }).then(result => res.json({result}))
 }

}

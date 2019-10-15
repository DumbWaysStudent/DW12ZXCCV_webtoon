const models = require('../models');
const User  = models.user
const Genre = models.genre
const Webtoon = models.webtoon
const Episode = models.episode
const Favorite = models.favorite
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = {

  show : (req,res) => {
   if(Object.entries(req.query).length >= 1) {
       if(req.query.hasOwnProperty('is_favorite')){
         Favorite.findAll({
           where : {
             user_id : 12
           },
           include : ['webtoon','user']
         }).then(result =>
           res.json({
              status: 200,
              message : 'success',
              data : result
           })
         );

       }else{
         Webtoon.findAll({
           where  : {
             title : { [Op.like] : `%${req.query.title}%` }
           }
         }).then(result => res.json({
           status : 200,
           message : 'succes',
           data : result
         }))
        }
      }else{
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
     }).then(webtoons =>
       res.json({
         status:200,
         message:'success',
         data: webtoons
       })
     )
   }
 },

 store : (req,res) => {
   Webtoon.create(req.body).then(todo => {
     res.send({
       status : 200,
       message : 'success',
       data : todo
     })
   })
 },

 destroy : (req,res) => {
   let {id} = req.params
   Webtoon.destroy({
     where : {
       id
     }
   }).then(webtoon => res.json({
     status : 200,
     message : 'success',
     data : webtoon
   }))
 },

 update : (req,res) => {
   Webtoon.update(
     req.body,
     {where : {id : req.params.id}}
   ).then(webtoon => {
     res.json({
       status : 200,
       message : "success",
       data : webtoon
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
   }).then(webtoons=>
     res.json({
       status : 200,
       message : 'success',
       data : webtoons
     })
   )
 }
}

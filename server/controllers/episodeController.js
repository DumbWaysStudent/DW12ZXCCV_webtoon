const models = require('../models')
const Episode  = models.episode
const Chapter = models.chapter

exports.showWithChapter  = (req,res) => {
  let { episode_id } = req.params
  Episode.findAll({
    where: {
      id : episode_id
    },
    include: [{
        as: "chapter",
        model: Chapter
    }]
  }).then(episode=>res.send(episode[0].chapter))
  .catch(err => console.log(err))
}

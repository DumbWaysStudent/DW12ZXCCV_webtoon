const user = require('express').Router()
const userController = require('../controllers/userController')

const middleware = require('../middleware')

const authMiddleware = [middleware.auth,middleware.verifyToken]

user.post("/register",userController.register)
user.post("/login",userController.login)


user.post("/:id/webtoon/:webtoon_id/episode",authMiddleware,userController.createEpisode);
user.put("/:id/webtoon/:webtoon_id/episode/:episode_id",authMiddleware,userController.editEpisode);
user.get("/:id/webtoon/:webtoon_id/episode/:episode_id",authMiddleware,userController.episodeWithchapter);
user.delete("/:id/webtoon/:webtoon_id/episode/:episode_id",authMiddleware,userController.deleteEpisode);


user.post("/:id/webtoon/:webtoon_id/episode/:episode_id/image",authMiddleware,userController.addChapter);


user.get("/:id/webtoons",authMiddleware,userController.myWebtoon);
user.get("/:id/webtoon/:webtoon_id/episodes",authMiddleware,userController.episode);
user.post("/:id/webtoon",authMiddleware,userController.createMyWebtoon);
user.patch("/:id/webtoon/:webtoon_id",authMiddleware,userController.editMyWebtoon);
user.delete("/:id/webtoon/:webtoon_id",authMiddleware,userController.deleteMyWebtoon);

module.exports = user;

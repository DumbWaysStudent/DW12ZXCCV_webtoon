const router  = require('express').Router();

const webtoonController = require('../controllers/webtoonController')
const episodesController = require('../controllers/episodeController')

const middleware = require('../middleware')

const authMiddleware = [middleware.auth,middleware.verifyToken]

router.get('/',authMiddleware,webtoonController.show)
router.get('/:id/episodes',authMiddleware,webtoonController.episode)
// router.post('/',authMiddleware,webtoonController.store)
router.delete('/:id/delete',authMiddleware,webtoonController.destroy)
router.patch('/:id/update',authMiddleware,webtoonController.update)
router.get('/:id/episode/:episode_id',authMiddleware,episodesController.showWithChapter);

module.exports = router;

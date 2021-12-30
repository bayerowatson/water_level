const subscribersController = require('./subscribersController');
const levelsController = require('./levelsController');
const express = require('express');
const router = express.Router();


router.route('/levels')
    .get(levelsController.getLevels)
router.route('/subscriber')
    .post(subscribersController.addSubscriber)
router.route('/subscriber/:email')
    .get(subscribersController.findByEmail)
    .delete(subscribersController.deleteByEmail)


module.exports = router;
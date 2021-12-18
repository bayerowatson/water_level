const subscribersController = require('./subscribersController');
const levelsController = require('./levelsController');
const express = require('express');
const router = express.Router();


// define the home page route
router.route('/levels')
    .get(levelsController.getLevels)
router.route('/subscribers')
    .get(subscribersController.getSubscribers)
    .post(subscribersController.addSubscriber)
router.route('/subscriber/:email')
    .delete(subscribersController.deleteByEmail)


module.exports = router;
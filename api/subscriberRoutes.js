const subscriberController = require('./subscriberController');
const express = require('express')
const router = express.Router()


// define the home page route
router.route('/')
    .get((req, res) => {
        res.send('subscribers')
})
router.route('/subscriber')
    .get(subscriberController.getSubscribers)
    .post(subscriberController.addSubscriber)
router.route('/subscriber/:email')
    .delete(subscriberController.deleteByEmail)


module.exports = router
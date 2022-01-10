subscriberDAO = require('../dao/subscriberDAO');

module.exports = class subscribersController {
    static async getSubscribers(req, res, next) {
        try{
            let response;
            response = await subscriberDAO.search();
            res.json(response);
        } catch (err) {
            next(err)
        }
    }

    static async deleteByEmail(req, res, next) {
        try {
            let response = await subscriberDAO.deleteByEmail(req.params.email);
            res.json(response);
        } catch (err) {
            next(err)
        }
    }

    static async addSubscriber(req, res, next) {
        try {
            let response = await subscriberDAO.addSubscriber(req.body);
            res.json(response);
        } catch (err) {
            next(err)
        }
    }

    static async findByEmail(req, res, next) {
        try {
            let response = await subscriberDAO.findSubscriber(req.params.email);
            res.json(response);
        } catch (err) {
            next(err)
        }
    }
}
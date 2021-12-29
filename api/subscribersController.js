subscriberDAO = require('../dao/subscriberDAO');

module.exports = class subscribersController {
    static async getSubscribers(req, res) {
        let response;
        response = await subscriberDAO.search();
        res.json(response);
    }

    static async deleteByEmail(req, res) {
        let response = await subscriberDAO.deleteByEmail(req.params.email);
        res.json(response);
    }

    static async addSubscriber(req, res) {
        let response = await subscriberDAO.addSubscriber(req.body);
        res.json(response);
    }

    static async findByEmail(req, res) {
        let response = await subscriberDAO.findSubscriber(req.params.email);
        res.json(response);
    }
}
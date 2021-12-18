const waterServiceApi = require('../services/waterServiceApi');

module.exports = class subscriberController {
    static async getLevels(req, res) {
        let response = {};
        response.gauley = await waterServiceApi.getGauley();
        response.dries = await waterServiceApi.getDries();
        res.json(response)
    }
}
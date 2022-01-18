const waterServiceApi = require('../services/waterServiceApi');

module.exports = class subscriberController {
    static async getLevels(req, res, next) {
        let response = {};
        try {
            response.gauley = await waterServiceApi.getGauley();
            response.dries = await waterServiceApi.getDries();
            res.json(response)
        }
        catch(err) {
            next(err)
        }
    }
}
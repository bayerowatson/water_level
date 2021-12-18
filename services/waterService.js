const waterServiceApi = require('./waterServiceApi.js');
subscriberDAO = require('../dao/subscriberDAO');

module.exports = class waterService {
    constructor() {
        this.emailList = '';
        this.emailBody = ''  
    } 

    async updateLevels() {
        let driesLevel = await waterServiceApi.getDries();
        let gauleyLevel = await waterServiceApi.getGauley();
        console.log('Dries level:', driesLevel);
        console.log('Gauley level:', gauleyLevel);
        this.emailBody = `
            New River Dries: ${driesLevel.value} ft.
            Last updated: ${driesLevel.dateTime}

            Gauley River Below Summersville Dam: ${gauleyLevel.value} ft.
            Last updated: ${gauleyLevel.dateTime}` 
    }

    async sendEmail() {
        let response = await subscriberDAO.search()
        this.emailList = response.map((e) => e.email)
        console.log('sending email to: ', this.emailList)
        console.log(this.emailBody)
    }
};


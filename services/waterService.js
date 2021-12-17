const waterServiceApi = require('./waterServiceApi.js');
subscriberDAO = require('../dao/subscriberDAO');

module.exports = class waterService {
    constructor() {
        this.emailList = '';
        this.emailBody = ''  
    } 

    async updateLevels() {
        let driesData = await waterServiceApi.getDries();
        let driesLevel = driesData.data.value.timeSeries[0].values[0].value[0];
        let gauleyData = await waterServiceApi.getGauley();
        let gauleyLevel = gauleyData.data.value.timeSeries[2].values[0].value[0];
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


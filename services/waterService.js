const waterServiceApi = require('./waterServiceApi.js');
subscriberDAO = require('../dao/subscriberDAO');

module.exports = class waterService {
    constructor() {
        this.alertEmailList = [];
        this.dailyEmailList = [];
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
            Last updated: ${gauleyLevel.dateTime}`;
        let levels = {dries: driesLevel, gauley: gauleyLevel};
        return levels;
    }

    async sendAlertEmail() {
        let response = await subscriberDAO.getSubscribers()
        this.alertEmailList = response.filter((e) => e.alert).map((e) => e.email)
        console.log('sending email to: ', this.alertEmailList)
        console.log(this.emailBody)
    }

    async sendDailyEmail() {
        let response = await subscriberDAO.getSubscribers()
        this.dailyEmailList = response.filter((e) => e.daily).map((e) => e.email)
        console.log('sending email to: ', this.dailyEmailList)
        console.log(this.emailBody)
    }
};


const waterServiceApi = require('./waterServiceApi.js');
const subscriberDAO = require('../dao/subscriberDAO');
const dotenv = require('dotenv');
dotenv.config({ path: "./.env" });
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.PASSWORD
  }
});

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
            New River Dries below Hawk's Nest Dam: ${driesLevel.value} ft.
            Last updated: ${driesLevel.dateTime}

            Gauley River below Summersville Dam: ${gauleyLevel.value} ft.
            Last updated: ${gauleyLevel.dateTime}`;
        let levels = {dries: driesLevel, gauley: gauleyLevel};
        return levels;
    }

    async sendAlertEmail() {
        let response = await subscriberDAO.getSubscribers()
        this.alertEmailList = response.filter((e) => e.alert).map((e) => e.email)
        const mailConfigurations = {
            from: 'wvriversurfing@gmail.com',
            to: this.alertEmailList,
            subject: 'WV River Surf Alert',
            text: this.emailBody
          };
          
          transporter.sendMail(mailConfigurations, (err, info) => {
            if (err) throw Error(err);
               console.log('Email Sent Successfully');
            console.log(info);
          });
    }

    async sendDailyEmail() {
        let response = await subscriberDAO.getSubscribers()
        this.dailyEmailList = response.filter((e) => e.daily).map((e) => e.email)
        const mailConfigurations = {
            from: 'wvriversurfing@gmail.com',
            to: this.dailyEmailList,
            subject: 'WV River Surf Daily Update',
            text: this.emailBody
          };
          
          transporter.sendMail(mailConfigurations, (err, info) => {
            if (err) throw Error(err);
               console.log('Email Sent Successfully');
            console.log(info);
          });
    }
};


import * as waterService from './waterService.js';
import nodemailer from 'nodemailer';


export default class waterData {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: process.env.MAIL_USERNAME,
              pass: process.env.MAIL_PASSWORD,
              clientId: process.env.OAUTH_CLIENTID,
              clientSecret: process.env.OAUTH_CLIENT_SECRET,
              refreshToken: process.env.OAUTH_REFRESH_TOKEN
            }
          }); 
          this.mailOptions = {
            from: 'wvriversurfing@gmail.com',
            to: 'bayerowatson@gmail.com',
            subject: 'Today\'s water level',
            text: '' 
            };   
    } 

    async updateLevels() {
        let driesData = await waterService.getDries();
        let driesLevel = driesData.data.value.timeSeries[0].values[0].value[0];
        let gauleyData = await waterService.getGauley();
        let gauleyLevel = gauleyData.data.value.timeSeries[2].values[0].value[0];
        console.log('Dries level:', driesLevel);
        console.log('Gauley level:', gauleyLevel);
        this.mailOptions.text = `
            New River Dries: ${this.driesLevel.value} ft.
            Last updated: ${this.driesLevel.dateTime}

            Gauley River Below Summersville Dam: ${this.gauleyLevel.value} ft.
            Last updated: ${this.gauleyLevel.dateTime}` 
    }

    sendEmail() {
        this.transporter.sendMail(this.mailOptions, function(err, data) {
            if (err) {
                console.log("Error " + err);
            } else {
                console.log("Email sent successfully");
            }
        });
    }
};

let water = new waterData();

water.updateLevels();

water.sendEmail();

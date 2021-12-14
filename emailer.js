import * as waterData from './waterData.js';
import nodemailer from 'nodemailer'


export default class Emailer {

    constructor() {
        this.driesData = await this.waterData.getDries();
        this.driesLevel = this.driesData.data.value.timeSeries[0].values[0].value[0];
        this.gauleyData = await this.waterData.getGauley();
        this.gauleyLevel = this.gauleyData.data.value.timeSeries[2].values[0].value[0];
        console.log('Dries level:', driesLevel);
        console.log('Gauley level:', gauleyLevel);
    }

    let transporter = nodemailer.createTransport({
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

    let mailOptions = {
        from: 'wvriversurfing@gmail.com',
        to: 'bayerowatson@gmail.com',
        subject: 'Today\'s water level',
        text: `
            New River Dries: ${driesLevel.value} ft.
            Last updated: ${driesLevel.dateTime}
    
            Gauley River Below Summersville Dam: ${gauleyLevel.value} ft.
            Last updated: ${gauleyLevel.dateTime}` 
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Email sent successfully");
        }
    });
};

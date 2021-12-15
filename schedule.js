import nodemailer from 'nodemailer';

transporter = nodemailer.createTransport({
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
mailOptions = {
  from: 'wvriversurfing@gmail.com',
  to: 'bayerowatson@gmail.com',
  subject: 'Today\'s water level',
  text: 'this is a test' 
  };   
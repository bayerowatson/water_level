const express = require('express'); 
const dotenv = require('dotenv');
const schedule = require('node-schedule');
const waterService = require('./waterService.js');
dotenv.config();

const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`)
})

let testEmails = ["email@email.com","email2@test.org"];
let waterData = new waterService(testEmails);



const job = schedule.scheduleJob('22 * * * *', () => {
  waterData.updateLevels()
    .then(() => waterData.sendEmail());
});
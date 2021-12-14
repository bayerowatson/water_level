import express from 'express'; 
import dotenv from 'dotenv';
import schedule from 'node-schedule';
import {getLevelsAndSendEmail} from './emailer.js';
dotenv.config();

const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`)
})


const job = schedule.scheduleJob('25 10 * * *', getLevelsAndSendEmail);
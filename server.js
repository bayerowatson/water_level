const express = require('express');
const cors = require('cors');
const path = require("path");
const dotenv = require('dotenv');
const routes = require('./api/routes');
const mongodb = require('mongodb');
const SubscriberDAO = require('./dao/subscriberDAO');
const waterService = require('./services/waterService.js');
const schedule = require('node-schedule')


const app = express();
dotenv.config({ path: "./.env" });
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")))



//start server and connect to DB
const client = new mongodb.MongoClient(process.env.ATLAS_URI);
app.listen(port, () => {
    console.log('server listening on port ', port);
    client.connect()
        .then(client => {
            SubscriberDAO.injectDB(client);
            console.log('connected to DB');
        })
        .catch(err=>console.log('DB error: ', err));
  });

//routes
app.use(routes);

//send client index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


//update water levels and send scheduled emails
let waterData = new waterService();

const daily = schedule.scheduleJob('0 7 * * *', () => {
  waterData.updateLevels()
  .then(() => waterData.sendDailyEmail())
  .catch(err => console.log(err))
});

const alert = schedule.scheduleJob('55 * * * *', () => {
  waterData.updateLevels()
  .then((res) => {
    if ((res.dries.value > 10 && res.dries.value <18) ||
          res.gauley.value > 12) {
      waterData.sendAlertEmail();
    }
  }).catch(err => console.log(err))
});
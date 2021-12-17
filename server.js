const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const subscriberRoutes = require('./api/subscriberRoutes');
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
app.use(subscriberRoutes);

let waterData = new waterService();

const job = schedule.scheduleJob('0 * * * *', () => {
  waterData.updateLevels()
  .then(() => waterData.sendEmail());

});
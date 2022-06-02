const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const CronJob = require('cron').CronJob;

const ERPController = require('./controllers/ERPController');
const Connection = require('./database/Mongo');

new CronJob('* * * * *', () => {
    try {
        ERPController.findUsers(); // Serviço 1
        ERPController.findSales(); // Serviço 2
        ERPController.findProducts(); // Serviço 3
    } catch (err) {
        console.log('MIGRATION BETWEEN FIREBIRD AND MONGO: ', err);
    }
}, null, true);

app.use(cors());
mongoose.connect(Connection.uri, { useNewUrlParser: true, useUnifiedTopology: true });

server.listen(3334, function(){ console.log('SERVICE RUNNING!') });
  
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const databaseConnection = require('./databaseConnection');
const userAuth = require('./routes/userAuth');
const adminAuth = require('./routes/adminAuth');
const adminDetails = require('./routes/adminDetails');
const frontendData = require('./routes/frontendData');

const app = express();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

const PORT = 5000;
databaseConnection();

app.get('/test', (req, res) => {
    res.send('this is test route');
})

app.use('/',userAuth);
app.use('/',adminAuth);
app.use('/',adminDetails);
app.use('/',frontendData);

app.listen(PORT, () => {
    console.log(`PORT IS RUNNING ON ${PORT}`);
})
const express = require("EXPRESS");
const bodyParser = require("body-parser");

const app = express();
const {API_VERSION} = require('./config');

//load routing
const userRoutes = require('./routers/user');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configure header HTTP


//Router BAsic
app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;
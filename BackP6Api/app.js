const express = require('express');
const morgan = require('morgan');
require('./database/dbConfig');
const usersRoutes = require('./routes/usersRoutes')
const bodyParser = require('body-parser');

const app = express();


app.use(morgan('dev'));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());


app.use("/api/auth", usersRoutes)






module.exports = app;
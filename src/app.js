'use strict';

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

// Connecta ao banco
mongoose.connect(config.connectionString);

// Carrega os Models
const Client = require('./models/client');
const Product = require('./models/product');
const User = require('./models/user');
const Sale = require('./models/sale');

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const clientRoute = require('./routes/client-route');
const productRoute = require('./routes/product-route');
const userRoute = require('./routes/user-route');
const saleRoute = require('./routes/sale-route');

app.use(cors())

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/clients', clientRoute);
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/sales', saleRoute);

module.exports = app;
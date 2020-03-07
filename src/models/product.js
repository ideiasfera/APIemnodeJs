'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    descricao: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    precocompra: {
        type: Number,
        required: true
    },
    precovenda: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Product', schema);

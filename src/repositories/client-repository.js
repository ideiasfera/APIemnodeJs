'use strict';
const mongoose = require('mongoose');
const Client = mongoose.model('Client');

exports.get = async() => {
    const res = await Client.find({}, 'nome cpf celular email');
    return res;
}

exports.getById = async(id) => {
    const res = await Client
        .findById(id);
    return res;
}

exports.create = async(data) => {
    var client = new Client(data);
    await client.save();
}

exports.update = async(id, data) => {
    await Client
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.nome,
                cpf: data.cpf,
                celular: data.celular,
                email: data.email
            }
        });
}

exports.delete = async(id) => {
    await Client
        .findOneAndRemove(id);
}

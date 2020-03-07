'use strict';
const mongoose = require('mongoose');
const Sale = mongoose.model('Sale');

exports.get = async() => {
    const res = await Sale.find({}, 'client product user quantidade preco total datavenda');
    return res;
}

exports.getById = async(id) => {
    const res = await Sale
        .findById(id);
    return res;
}

exports.create = async(data) => {
    var sale = new Sale(data);
    await sale.save();
}

exports.update = async(id, data) => {
    await Sale
        .findByIdAndUpdate(id, {
            $set: {
                quantidade: data.quantidade,
                preco: data.preco,
                total: data.total,
                datavenda: data.datavenda
            }
        });
}

exports.delete = async(id) => {
    await Sale
        .findOneAndRemove(id);
}

exports.getByData = async(datavenda) => {
    const res = Sale
        .find({
            datavenda: datavenda
        }, 'client product user quantidade preco total datavenda');
    return res;
}

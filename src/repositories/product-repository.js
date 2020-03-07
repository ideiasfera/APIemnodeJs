'use strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product.find({}, 'descricao categoria marca precocompra precovenda');
    return res;
}

exports.getById = async(id) => {
    const res = await Product
        .findById(id);
    return res;
}

exports.create = async(data) => {
    var product = new Product(data);
    await product.save();
}

exports.update = async(id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                descricao: data.descricao,
                categoria: data.categoria,
                marca: data.marca,
                precocompra: data.precocompra,
                precovenda: data.precovenda
            }
        });
}

exports.delete = async(id) => {
    await Product
        .findOneAndRemove(id);
}

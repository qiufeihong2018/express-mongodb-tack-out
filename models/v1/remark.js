'use strict';

const mongoose = require('mongoose')
const remarkData = require('../../InitData/remark')
const Schema = mongoose.Schema;

const remarkSchema = new Schema({
    remarks: [],
})

const Remark = mongoose.model('Remark', remarkSchema);

Remark.findOne((err, data) => {
    if (!data) {
        Remark.create(remarkData)
    }
})

module.exports = Remark
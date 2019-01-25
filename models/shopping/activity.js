'use strict';

const mongoose = require('mongoose')
const activityData = require('../../InitData/activity')

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    description: String,
    icon_color: String,
    icon_name: String,
    id: Number,
    name: String,
    ranking_weight: Number
})

activitySchema.index({index: 1});

const Activity = mongoose.model('Activity', activitySchema);

Activity.findOne((err, data) => {
    if (!data) {
        activityData.forEach(item => {
            Activity.create(item);
        })
    }
})

module.exports = Activity
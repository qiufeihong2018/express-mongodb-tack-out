'use strict';

const BaseComponent = require('../prototype/baseComponent')
const StatisModel = require('../models/statis/statis')
const dtime = require('time-formater')

class Statistic extends BaseComponent {
    constructor() {
        super()
        this.apiRecord = this.apiRecord.bind(this)
    }

    async apiRecord(req, res, next) {
        try {
            const statis_id = await this.getId('statis_id')
            const apiInfo = {
                date: dtime().format('YYYY-MM-DD'),
                origin: req.headers.origin,
                id: statis_id,
            }
            StatisModel.create(apiInfo)
        } catch (err) {
            console.log('API记录出错', err);
        }
        next()
    }
}

module.exports = new Statistic()
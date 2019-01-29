'use strict';

const express = require('express');
const Food = require('../controller/shopping/shop')
const router = express.Router();

router.get('/restaurants', Food.searchResaturant);

module.exports = router
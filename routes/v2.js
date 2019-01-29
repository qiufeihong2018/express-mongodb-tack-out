'use strict';

const express = require('express');
const Entry = require('../controller/v2/entry')
const CityHandle = require('../controller/v1/cities')
const User = require('../controller/v2/user')
const router = express.Router();

router.get('/index_entry', Entry.getEntry);
router.get('/pois/:geohash', CityHandle.pois);
router.post('/login', User.login);
router.get('/signout', User.signout);
router.post('/changepassword', User.chanegPassword);


module.exports = router
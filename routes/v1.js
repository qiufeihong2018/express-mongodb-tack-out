'use strict';

const express = require('express')
const CityHandle = require('../controller/v1/cities')
const SearchPlace = require('../controller/v1/search')
const Carts = require('../controller/v1/carts')
const Address = require('../controller/v1/address')
const Remark = require('../controller/v1/remark')
const BaseComponent = require('../prototype/baseComponent')
const Captchas = require('../controller/v1/captchas')
const User = require('../controller/v2/user')
const Order = require('../controller/v1/order')
const Hongbao = require('../controller/promotion/hongbao')

const baseHandle = new BaseComponent();
const router = express.Router();

router.get('/cities', CityHandle.getCity);
router.get('/cities/:id', CityHandle.getCityById);
router.get('/exactaddress', CityHandle.getExactAddress);
router.get('/pois', SearchPlace.search);
router.post('/addimg/:type', baseHandle.uploadImg);
router.post('/carts/checkout', Carts.checkout);
router.get('/carts/:cart_id/remarks', Remark.getRemarks);
router.post('/captchas', Captchas.getCaptchas);
router.get('/user', User.getInfo);
router.get('/user/:user_id', User.getInfoById);
router.get('/users/list', User.getUserList);
router.get('/users/count', User.getUserCount);
router.get('/users/:user_id/addresses', Address.getAddress);
router.post('/users/:user_id/addresses', Address.addAddress);
router.get('/user/city/count', User.getUserCity);
router.get('/addresse/:address_id', Address.getAddAddressById);
router.delete('/users/:user_id/addresses/:address_id', Address.deleteAddress);
router.post('/users/:user_id/carts/:cart_id/orders', Order.postOrder);
router.post('/users/:user_id/hongbao/exchange', Hongbao.exchange);


module.exports = router
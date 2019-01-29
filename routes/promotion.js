'use strict';

const express =require( 'express');
const Hongbao =require( '../controller/promotion/hongbao')
const router = express.Router();

router.get('/v2/users/:user_id/hongbaos', Hongbao.getHongbao)
router.get('/v2/users/:user_id/expired_hongbaos', Hongbao.getExpiredHongbao)

module.exports= router
'use strict';

const express =require( 'express');
const router = express.Router();

router.get('/payment/queryOrder', (req, res, next) => {
  res.send({
    status: 0,
    type: 'PAY_FAILED',
    message: '暂不开放支付功能',
  });
})

module.exports= router;
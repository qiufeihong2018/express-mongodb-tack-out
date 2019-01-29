'use strict';

const express =require( 'express');
const VipCart =require( '../controller/member/vipcart')
const router = express.Router();

router.post('/v1/users/:user_id/delivery_card/physical_card/bind', VipCart.useCart)

module.exports= router
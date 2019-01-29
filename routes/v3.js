'use strict';

const express =require( 'express');
const Explain =require( '../controller/v3/explain')
const router = express.Router();

router.get('/profile/explain', Explain.getExpalin)

module.exports= router
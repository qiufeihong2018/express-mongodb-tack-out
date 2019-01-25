'use strict';

const express =require( 'express')
const Admin =require( '../controller/admin/admin')
const router = express.Router()

router.post('/login', Admin.login);
// router.post('/register', Admin.register);
router.get('/singout', Admin.singout);
router.get('/all', Admin.getAllAdmin);
router.get('/count', Admin.getAdminCount);
router.get('/info', Admin.getAdminInfo);
router.post('/update/avatar/:admin_id', Admin.updateAvatar);

module.exports= router
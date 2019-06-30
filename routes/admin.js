'use strict';

const express = require('express')
const classAdmin = require('../controller/admin/admin')
const Admin = new classAdmin()
const router = express.Router()

/**
 * @api {post} /admin/login/ login
 * @apiName login
 * @apiGroup Admin
 *
 *
 * @apiSuccess {Number} status  status of success.
 * @apiSuccess {String} message  message of success.
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *    "status": 1,
 *    "success": "登录成功"
 *}
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *{
 *    "status": 0,
 *    "type": "ERROR_PASSWORD",
 *    "message": "该用户已存在，密码输入错误"
 *}
 */
router.post('/login', Admin.login);


/**
 * @api {post} /admin/register/ register
 * @apiName register
 * @apiGroup Admin
 *
 * @apiSuccess {Number} status  status of success.
 * @apiSuccess {String} message  message of success.
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *    "status": 1,
 *    "message": "注册管理员成功"
 *}
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *{
 *    "status": 0,
 *    "type": "USER_HAS_EXIST",
 *    "message": "该用户已经存在"
 *}
 */
router.post('/register', Admin.register);
/**
 * @api {get} /admin/singout/ singout
 * @apiName Singout
 * @apiGroup Admin
 *
 *
 * @apiSuccess {Number} status status of the singout.
 * @apiSuccess {String} success  success message of the singout.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *    "status": 1,
 *    "success": "退出成功"
 *}
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *            {
 *                status: 0,
 *                message: '退出失败'
 *            }
 */
router.get('/singout', Admin.singout);

/**
 * @api {get} /admin/all/ all
 * @apiName All
 * @apiGroup Admin
 *
 *
 * @apiSuccess {Number} status status of the All.
 * @apiSuccess {Array} data  success message of the All.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 * "status": 1,
 *    "data": [
 *        {
 *            "user_name": "qiufeihong",
 *            "id": 21777,
 *            "create_time": "2019-02-04 14:28",
 *            "status": 2,
 *            "city": "上海",
 *            "__v": 0,
 *            "avatar": "169de1d243d19312.jpg",
 *            "admin": "超级管理员"
 *        }
 *            ]
 *   }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *{
 *                status: 0,
 *                type: 'ERROR_GET_ADMIN_LIST',
 *                message: '获取管理列表失败'
 *            }
 */
router.get('/all', Admin.getAllAdmin);

/**
 * @api {get} /admin/count/ count
 * @apiName Count
 * @apiGroup Admin
 *
 *
 * @apiSuccess {Number} status status of the count.
 * @apiSuccess {Number} count  count of the AllAdmin).
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *    "status": 1,
 *    "count": 21223
 *}
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *{
 *                status: 0,
 *                type: 'ERROR_GET_ADMIN_COUNT',
 *                message: '获取管理员数量失败'
 *            }
 */
router.get('/count', Admin.getAdminCount);


/**
 * @api {get} /admin/info/ info
 * @apiName Info
 * @apiGroup Admin
 *
 *
 * @apiSuccess {Number} status status of the info.
 * @apiSuccess {Object} data  data of the info.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *    "status": 1,
 *    "data": {
 *       "user_name": "qiufeihong",
 *        "id": 21777,
 *        "create_time": "2019-02-04 14:28",
 *        "status": 2,
 *        "city": "上海",
 *        "avatar": "169de1d243d19312.jpg",
 *        "admin": "超级管理员"
 *    }
 *}
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *{
 *    "status": 0,
 *    "type": "ERROR_SESSION",
 *    "message": "获取管理员信息失败"
 *}
 */
router.get('/info', Admin.getAdminInfo);


/**
 * @api {post} /admin/update/avatar/:admin_id update
 * @apiName update
 * @apiGroup Admin
 *
 *
 * @apiSuccess {Number} status  status of success.
 * @apiSuccess {String} message  message of success.
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *    "status": 1,
 *    "success": "登录成功"
 *}
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 * {
 *    "status": 0,
 *   "type": "ERROR_ADMINID",
 *   "message": "admin_id参数错误"
 *}
 */
router.post('/update/avatar/:admin_id', Admin.updateAvatar);

module.exports = router
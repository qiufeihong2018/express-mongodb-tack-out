'use strict';

const express =require( 'express');
const Order =require( '../controller/v1/order')
const router = express.Router();

/**
 * @api {get} /bos/v2/users/:user_id/orders?offset=0&limit=20 getOrders
 * @apiName getOrders
 * @apiGroup Bos
 *
 *
 * @apiSuccess {Number} status status of the All.
 * @apiSuccess {Array} data  success message of the All.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *[
 *    {
 *        "_id": "5a250b823ba8590522fa72a2",
 *       "restaurant_id": 1,
 *        "restaurant_image_url": "16018a6492334.jpeg",
 *        "restaurant_name": "演示",
 *        "formatted_created_at": "2017-12-04 16:46",
 *        "order_time": 1512377218206,
 *        "time_pass": 49506830,
 *        "total_amount": 261,
 *        "total_quantity": 1,
 *        "unique_id": 18,
 *        "id": 18,
 *        "user_id": 97,
 *        "address_id": 26,
 *        "__v": 0,
 *        "top_show": 0,
 *        "timeline_node": {
 *            "in_processing": 0,
 *            "actions": []
 *        },
 *        "status_code": 0,
 *        "status_bar": {
 *            "color": "f60",
 *            "image_type": "",
 *            "sub_title": "15分钟内支付",
 *            "title": "支付超时"
 *        },
 *        "restaurant_type": 0,
 *        "remind_reply_count": 0,
 *        "rated_point": 0,
 *        "pay_remain_seconds": 0,
 *        "operation_upload_photo": 0,
 *        "operation_rebuy": 2,
 *        "operation_rate": 0,
 *        "operation_pay": 0,
 *        "operation_confirm": 0,
 *        "is_pindan": 0,
 *        "is_new_pay": 1,
 *        "is_deletable": 1,
 *        "is_brand": 0,
 *        "basket": {
 *            "pindan_map": [],
 *            "packing_fee": {
 *                "price": 217,
 *                "quantity": 1,
 *                "name": "餐盒",
 *                "category_id": 1
 *            },
 *            "group": [
 *                [
 *                    {
 *                        "name": "麻辣烫",
 *                        "price": 20,
 *                         "quantity": 2,
 *                         "_id": "5a250b443ba8590522fa729e",
 *                         "specs": [
 *                            ""
 *                        ],
 *                        "new_specs": [],
 *                        "attrs": []
 *                    }
 *                ]
 *            ],
 *            "extra": [],
 *            "deliver_fee": {
 *                "quantity": 1,
 *                "price": 4,
 *                "name": "配送费",
 *                "category_id": 2
 *            },
 *           "abandoned_extra": []
 *        }
 *    }
 *]
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 * {
 *                status: 0,
 *                type: 'ERROR_GET_ORDER_LIST',
 *                message: '获取订单列表失败'
 *            }
 */
router.get('/v2/users/:user_id/orders', Order.getOrders)

/**
 * @api {get} /bos/v1/users/:user_id/orders/:order_id/snapshot getDetail
 * @apiName getDetail
 * @apiGroup Bos
 *
 *
 * @apiSuccess {Number} status status of the All.
 * @apiSuccess {Array} data  success message of the All.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *[
 *    {
 *        "_id": "5a250b823ba8590522fa72a2",
 *       "restaurant_id": 1,
 *        "restaurant_image_url": "16018a6492334.jpeg",
 *        "restaurant_name": "演示",
 *        "formatted_created_at": "2017-12-04 16:46",
 *        "order_time": 1512377218206,
 *        "time_pass": 49506830,
 *        "total_amount": 261,
 *        "total_quantity": 1,
 *        "unique_id": 18,
 *        "id": 18,
 *        "user_id": 97,
 *        "address_id": 26,
 *        "__v": 0,
 *        "top_show": 0,
 *        "timeline_node": {
 *            "in_processing": 0,
 *            "actions": []
 *        },
 *        "status_code": 0,
 *        "status_bar": {
 *            "color": "f60",
 *            "image_type": "",
 *            "sub_title": "15分钟内支付",
 *            "title": "支付超时"
 *        },
 *        "restaurant_type": 0,
 *        "remind_reply_count": 0,
 *        "rated_point": 0,
 *        "pay_remain_seconds": 0,
 *        "operation_upload_photo": 0,
 *        "operation_rebuy": 2,
 *        "operation_rate": 0,
 *        "operation_pay": 0,
 *        "operation_confirm": 0,
 *        "is_pindan": 0,
 *        "is_new_pay": 1,
 *        "is_deletable": 1,
 *        "is_brand": 0,
 *        "basket": {
 *            "pindan_map": [],
 *            "packing_fee": {
 *                "price": 217,
 *                "quantity": 1,
 *                "name": "餐盒",
 *                "category_id": 1
 *            },
 *            "group": [
 *                [
 *                    {
 *                        "name": "麻辣烫",
 *                        "price": 20,
 *                         "quantity": 2,
 *                         "_id": "5a250b443ba8590522fa729e",
 *                         "specs": [
 *                            ""
 *                        ],
 *                        "new_specs": [],
 *                        "attrs": []
 *                    }
 *                ]
 *            ],
 *            "extra": [],
 *            "deliver_fee": {
 *                "quantity": 1,
 *                "price": 4,
 *                "name": "配送费",
 *                "category_id": 2
 *            },
 *           "abandoned_extra": []
 *        }
 *    }
 *]
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 * {
 *                status: 0,
 *                type: 'ERROR_GET_ORDER_LIST',
 *                message: '获取订单列表失败'
 *            }
 */
router.get('/v1/users/:user_id/orders/:order_id/snapshot', Order.getDetail)

/**
 * @api {get} /bos/orders/ orders
 * @apiName Orders
 * @apiGroup Bos
 *
 *
 * @apiSuccess {Number} status status of the All.
 * @apiSuccess {Array} data  success message of the All.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *[
 *    {
 *        "_id": "5bc038ecd1bd6f06de759503",
 *        "restaurant_id": 1,
 *        "restaurant_image_url": "164ad0b6a3917599.jpg",
 *        "restaurant_name": "效果演示",
 *        "formatted_created_at": "2018-10-12 14:02",
 *        "order_time": 1539324140376,
 *        "time_pass": 22559202,
 *        "total_amount": 21345,
 *        "total_quantity": 2,
 *        "unique_id": 5522,
 *        "id": 5522,
 *        "user_id": 14112,
 *        "address_id": 4166,
 *        "__v": 0,
 *        "top_show": 0,
 *        "timeline_node": {
 *            "in_processing": 0,
 *            "actions": []
 *        }
 *    ]
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *{
 *                status: 0,
 *                type: 'GET_ORDER_DATA_ERROR',
 *                message: '获取订单数据失败'
 *            }
 */
router.get('/orders', Order.getAllOrders)
/**
 * @api {get} /bos/orders/count getOrdersCount
 * @apiName getOrdersCount
 * @apiGroup Bos
 *
 *
 * @apiSuccess {Number} status status of the All.
 * @apiSuccess {Array} data  success message of the All.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *    "status": 1,
 *    "count": 5510
 *}
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *{
 *                status: 0,
 *                type: 'GET_ORDER_DATA_ERROR',
 *                message: '获取订单数据失败'
 *            }
 */
router.get('/orders/count', Order.getOrdersCount)

module.exports= router
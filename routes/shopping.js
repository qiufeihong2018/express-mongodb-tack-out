'use strict';

const express = require('express');
const Shop = require('../controller/shopping/shop')
const Food = require('../controller/shopping/food')
const Category = require('../controller/shopping/category')
const Check = require('../middlewares/check')

const router = express.Router();

router.post('/addshop', Check.checkAdmin, Shop.addShop);
router.get('/restaurants', Shop.getRestaurants);
router.get('/restaurants/count', Shop.getShopCount);
router.post('/updateshop', Check.checkAdmin, Shop.updateshop);
router.delete('/restaurant/:restaurant_id', Check.checkSuperAdmin, Shop.deleteResturant);
router.get('/restaurant/:restaurant_id', Shop.getRestaurantDetail);
router.post('/addfood', Check.checkAdmin, Food.addFood);
router.get('/getcategory/:restaurant_id', Food.getCategory);
router.post('/addcategory', Check.checkAdmin, Food.addCategory);
router.get('/v2/menu', Food.getMenu);
router.get('/v2/menu/:category_id', Food.getMenuDetail);
router.get('/v2/foods', Food.getFoods);
router.get('/v2/foods/count', Food.getFoodsCount);
router.post('/v2/updatefood', Check.checkAdmin, Food.updateFood);
router.delete('/v2/food/:food_id', Check.checkSuperAdmin, Food.deleteFood);
router.get('/v2/restaurant/category', Category.getCategories);
router.get('/v1/restaurants/delivery_modes', Category.getDelivery);
router.get('/v1/restaurants/activity_attributes', Category.getActivity);

module.exports = router
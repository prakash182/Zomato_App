const authMiddleware = require('../Middleware/auth.middleware');
const foodController = require('../controllers/food.controller');
const express = require('express');
const router = express.Router();
const multer = require('multer');



/* POST /api/food/ [protected] */

router.post('/', authMiddleware.authFoodPartnerMiddleware, foodController.createFood)
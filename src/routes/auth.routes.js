const authController = require('../controllers/auth.controler')
const express = require('express')
const router = express.Router();


// user auth APIs
router.post('/user/register', authController.registerUser);
router.post('/user/login', authController.loginUser);
router.get('/user/logout', authController.logoutUser);


// food partner auth APIs
router.post('/food-partner/register', authController.registerFoodPartner);
router.post('/food-partner/login', authController.loginFoodPartner);
router.get('/food-partner', authController.logoutFoodPartner);


module.exports = router;

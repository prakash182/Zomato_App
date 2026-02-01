const express = require('express');
const foodController = require("../controllers/food.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const multer = require('multer');

const router = express.Router();


/* /api/food-partner/:id */
router.get("/:id",
    authMiddleware.authUserMiddleware,
    foodPartnerController.getFoodPartnerById)

module.exports = router;
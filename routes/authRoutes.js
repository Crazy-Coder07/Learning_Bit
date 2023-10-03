const express= require('express');
const { 
    registerController, 
    loginController,
    currentuserControllers,
} = require('../controllers/authControllers');
const authmiddleware = require("../middlewares/authMiddleware")

const router= express.Router();

// register routes
router.post('/register',registerController)

// login routes
router.post('/login',loginController)

// current users
router.get('/current-user',authmiddleware,currentuserControllers)

module.exports =router;
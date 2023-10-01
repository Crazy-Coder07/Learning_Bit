const express= require('express');
const { 
    registerController, 
    loginController,
} = require('../controllers/authControllers');

const router= express.Router();

// register routes
router.post('/register',registerController)

// login routes
router.post('/login',loginController)

module.exports =router;
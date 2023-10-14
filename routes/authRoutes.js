const express= require('express');
const { 
    registerController, 
    loginController,
    currentuserControllers,
    updateprofileControllers,
} = require('../controllers/authControllers');
const authmiddleware = require("../middlewares/authMiddleware");
const formidableMiddleware = require('express-formidable');


const router= express.Router();

// register routes
router.post('/register',registerController)

// login routes
router.post('/login',loginController)

// current users
router.get('/current-user',authmiddleware,currentuserControllers)

// update current user
router.put('/profile-updateprofile',authmiddleware,updateprofileControllers)

module.exports =router;
const express= require('express');
const { 
    registerController, 
    loginController,
    currentuserControllers,
    updateprofileControllers,
} = require('../controllers/authControllers');
const authmiddleware = require("../middlewares/authMiddleware");
const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../utils'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname);
    },
});
  
const upload = multer({ storage: storage });

const router= express.Router();

// register routes
router.post('/register',upload.single("image"),registerController)

// login routes
router.post('/login',loginController)

// current users
router.get('/current-user',authmiddleware,currentuserControllers)

// update current user
router.put('/profile-updateprofile',authmiddleware,updateprofileControllers)

module.exports =router;
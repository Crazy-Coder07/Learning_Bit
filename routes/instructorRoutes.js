const express= require('express');
const {
        becomeinstructorController,
     }=require("../controllers/instructorControllers");

const router= express.Router();

// becomeinstructor Routes
router.post("/becomeinstructor",becomeinstructorController);


module.exports =router;
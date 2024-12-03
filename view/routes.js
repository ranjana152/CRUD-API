const express=require('express');
const { studentDetails, newStudent } = require('../controller/userController.js');
const router=express.Router();
router.get("/findAll",studentDetails);
router.post("/addstudent",newStudent);
module.exports=router;
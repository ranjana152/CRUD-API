const express=require('express');
const { studentDetails, newStudent, updateStud, deleteStud } = require('../controller/userController.js');
const router=express.Router();
router.get("/findAll",studentDetails);
router.post("/addstudent",newStudent);
router.put("/updatestud/:rollId",updateStud);
router.delete("/deletestud/:rollId",deleteStud);
module.exports=router;
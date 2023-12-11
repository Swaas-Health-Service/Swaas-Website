const express=require("express");
const multer=require('multer');
const path=require('path');
require("dotenv").config();
const router=new express.Router();
const bcrypt=require('bcrypt');
const crypto=require("crypto");
const Patient=require('../Models/PatientSchema');
const Token=require('../Models/TokenSchema');


const Storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.resolve(`./Files/Patient/ProfileImage`))
    },
    fileName:function(req,res,cb){
        const fileName=`${Date.now()}`
    }
});

const upload=multer({
    storage:Storage
}).single('profilePhoto')


//Registration of Patient
router.post('/patient-register',async(req,res)=>{
    try{
        const {email,password,confirmpassword,mobileNumber,healthId}=req.body;
        const useremail = await Patient.findOne({ email:email });
        const usermobilenumber = await Patient.findOne({ mobileNumber:mobileNumber });
        if (useremail && usermobilenumber) {
            res.status(422).send({ message: "User already exists" })
        }else if (password !== confirmpassword) {
            res.status(422).send({ message: "Password and Confirm Password did not match" })
        }    
    }catch(err){
        res.status(500).send({message:"Internal Server Error"})
    }
})

module.exports=router;
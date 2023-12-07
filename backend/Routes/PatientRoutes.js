const express=require("express");
require("dotenv").config();
const PatientRouter=new express.Router();
const bcrypt=require('bcrypt');
const crypto=require("crypto");
const Patient=require('../Models/PatientSchema');
const Token=require('../Models/TokenSchema');
const multer=require('multer');


const Storage=multer.diskStorage({
    destination:"uploads",
    fileName:(req,file,cb)=>{
        cb(null,file.originalname);
    },
});

const upload=multer({
    storage:Storage
}).single('profilePhoto')
//Registration of Patient
PatientRouter.post('/patient-register',async(req,res)=>{
    const {healthId,password}=req.body;
    try{
        const preuser=await Patient.findOne({healthId:healthId})
        if(preuser){
            res.status(422).send({message:"User with Health Id already exists"})
        }else if(password.length<6){
            res.status(422).send({message:"Password length should be atleast og 6 characters"})
        }else{
            const salt = await bcrypt.genSalt(Number(process.env.SALT));
            const password = await bcrypt.hash(password, salt);
            const user=await new Patient({ ...req.body, password: password}).save();
            const token = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
            upload(req,res,(err)={
                if(err){
                    console.log(err);
                }
            })
        }   
    }catch(err){
        res.status(500).send({message:"Internal Server Error"})
    }
})

module.exports=PatientRouter;
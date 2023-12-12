const express=require("express");
const multer=require('multer');
const path=require('path');
require("dotenv").config();
const router=new express.Router();
const bcrypt=require('bcrypt');
const crypto=require("crypto");
const Patient=require('../Models/PatientSchema');
const Token=require('../Models/TokenSchema');
const validateToken=require('../Utils/validateToken');
const sendEmail = require("../Utils/sendEmail");


const Storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.resolve(`./Files/Patient/ProfileImage`))
    },
    fileName:function(req,res,cb){
        const {patientId}=req.body;
        const fileName=`${Date.now()}-${patientId}${path.extname(file.originalname)}`;
        cb(null,fileName);
    }
});

const upload = multer({ storage: Storage });

//Registration of Patient
router.post('/patient-register',upload.single("profileImage"),async(req,res)=>{
    try{
        const {email,password,confirmpassword,mobileNumber,healthId}=req.body;
        const useremail = await Patient.findOne({ email:email });
        const usermobilenumber = await Patient.findOne({ mobileNumber:mobileNumber });
        if (useremail || usermobilenumber) {
            res.status(422).send({ message: "User already exists" })
        }else if (password !== confirmpassword) {
            res.status(422).send({ message: "Password and Confirm Password did not match" })
        }else{
            const healthId = crypto.randomBytes(4).toString('hex');
            const salt=await bcrypt.genSalt(Number(process.env.SALT));
            const hashPassword=await bcrypt.hash(password,salt);
            const hashconfirmpassword=await bcrypt.hash(confirmpassword,salt);
            const patient=await new Patient({...req.body,healthId:healthId,password:hashPassword,confirmpassword:hashconfirmpassword,profilePhotoURL:`/ProfileImage/${req.file.filename}`}).save();
            const patienttoken=patient.generateToken();
            const token=await new Token({
                userId:patient._id,
                user:patienttoken,
                token:crypto.randomBytes(32).toString('hex'),
            }).save();
            const url=`${process.env.BASE_URL}/patient/verify-email/${patient._id}/${token.token}`;
            await sendEmail(patient.email,"Verify Email",url);
            res.status(201).send({message:"Patient Registered Successfully"});
        }
    }catch(err){
        res.status(500).send({message:"Internal Server Error"});
        console.log(error)
    }
})

module.exports=router;
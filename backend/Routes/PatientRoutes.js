const express=require("express");
const multer=require('multer');
const path=require('path');
require("dotenv").config();
const router=new express.Router();
const bcrypt=require('bcrypt');
const crypto=require("crypto");
const {Patient,validateRegistration,validateLogin}=require('../Models/PatientSchema');
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
        const {error}=validateRegistration(req.body);
        if (error) {
            res.status(400).send({ message: error.details[0].message });
        }
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
            const patient=await new Patient({...req.body,healthId:healthId,password:hashPassword,confirmpassword:hashconfirmpassword,profilePhotoURL:`/ProfileImage/${req.file.filename}`});
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

router.get('/verify-email/:id/:token',async(req,res)=>{
    try {
        const token=await Token.findOne({
            userId:req.params.id,
            token:req.params.token,
        });
        if(!token){
            res.status(400).send({message:"Invalid Link"});
        }
        const userToken=await validateToken(token.user);
        if(!userToken){
            res.status(404).send({message:"Token not found"});
        }
        await new Patient({...userToken}).save();
        await token.deleteOne(token.userId);
        res.status(200).send({message:"Email Verified Successfully"});
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"});
        console.log(error);
    }
})
router.post('/patient-login',async(req,res)=>{
    try {
        const {error}=validateLogin(req.body);
        if (error) {
            res.status(400).send({ message: error.details[0].message });
        }
        const {email,mobileNumber,password,healthId}=req.body;
        const useremail = await Patient.findOne({ email:email });
        const usermobilenumber = await Patient.findOne({ mobileNumber:mobileNumber });
        if (!useremail || !usermobilenumber) {
            res.status(422).send({ message: "Invalid Email or Mobile Number" });
        }

        const validPassword=await bcrypt.compare(password,useremail.password || usermobilenumber.password);
        if(!validPassword){
            res.status(422).send({message:"Invalid Password"});
        }

        const token=await useremail.generateAuthToken();
        res.status(200).send({data:token,message:"Patient Logged In Successfully"});
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"});
    }
});
 
router.patch('/patient-update',validateToken,async(req,res)=>{
    try {
        const {error}=validateRegistration(req.body);
        if (error) {
            res.status(400).send({ message: error.details[0].message });
        }
        const {email,password,confirmpassword,mobileNumber,healthId}=req.body;
        const useremail = await Patient.findOne({ email:email });
        const usermobilenumber = await Patient.findOne({ mobileNumber:mobileNumber });
        if (useremail || usermobilenumber) {
            res.status(422).send({ message: "User already exists" })
        }else if (password !== confirmpassword) {
            res.status(422).send({ message: "Password and Confirm Password did not match" })
        }else{
            const salt=await bcrypt.genSalt(Number(process.env.SALT));
            const hashPassword=await bcrypt.hash(password,salt);
            const hashconfirmpassword=await bcrypt.hash(confirmpassword,salt);
            const patient=await Patient.findByIdAndUpdate(req.patient._id,{...req.body,password:hashPassword,confirmpassword:hashconfirmpassword},{new:true});
            res.status(201).send({message:"Patient Updated Successfully",data:patient});
        }
    } catch (error) {
        res.status(500).send({message:"Internal Server Error"});
        console.log(error);
    }
});

module.exports=router;
const mongoose=require("mongoose");
require("dotenv").config();

const DoctorSchema = new mongoose.Schema({
    doctorId:{type:String,requird:true},
	name:{type:String,requird:true},
    email:{type:String,requird:true},
    mobileNumber:{type:String,requird:true},
    specialization:{type:String,required:true},
    practicingSince:{type:String,required:true},
    management:{type:String,required:true},
    city:{type:String,required:true},
    district:{type:String,required:true},
    state:{type:String,required:true},
    pincode:{type:String,required:true},
    hospital:{type:String,required:true},
});

const Doctor=new mongoose.model("Patient",DoctorSchema);

module.exports=Doctor;
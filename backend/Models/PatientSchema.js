const mongoose=require("mongoose");

const PatientSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
    middleName:{ type: String,required:false},
    lastName:{ type: String,required:false},
    email: { type: String, required: true},
    mobileNumber:{type: String, required: true},
    password:{type: String, required: true},
    confirmpassword:{type: String, required: true},
	address: { type: String, required: true},
	dayOfBirth: { type: String, required: true},
    monthOfBirth:{ type: String, required: true },
    yearOfBirth: { type: String, required: true },
    gender:{ type: String, required: true },
	healthId:{ type: String, required: true },
	pincode:{type: String, required: true},
    profilePhotoURL: {type:String,required:false},
});


const Patient=new mongoose.model("Patient",PatientSchema);

module.exports=Patient;
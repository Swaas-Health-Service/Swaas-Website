const mongoose=require("mongoose");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const PatientSchema = new mongoose.Schema({
	address: { type: String, required: true},
	dayOfBirth: { type: String, required: true},
	districtCode: { type: String, required: true},
    email: { type: String, required: true},
	firstName: { type: String, required: true },
    gender:{ type: String, required: true },
	healthId:{ type: String, required: true },
    lastName:{ type: String, required: true },
    middleName:{ type: String, required: true },
    monthOfBirth:{ type: String, required: true },
    name:{type: String, required: true},
    password:{type: String, required: true},
	pincode:{type: String, required: true},
    profilePhoto: { data: Buffer, contentType: String },
    stateCode:{ type: String, required: true },
    subdistrictCode:{type: String, required: true},
    token:{type: String, required: true},
	pincode:{type: String, required: true},
    townCode: { type: String, required: true },
    txnId:{type: String, required: true},
    villageCode:{type: String, required: true},
	wardCode:{type: String, required: false},
    yearOfBirth: { type: String, required: true }
});

PatientSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};



const Patient=new mongoose.model("Patient",PatientSchema);

module.exports=Patient;
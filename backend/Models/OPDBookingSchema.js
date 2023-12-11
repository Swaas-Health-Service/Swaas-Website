const mongoose=require("mongoose");

const OPDBookingSchema = new mongoose.Schema({
	appointmentId: { type: String, required: true },
    patientId:{ type: String, required: true },
    doctorId:{ type: String, required: true },
    appointmentDate:{type:Date,required:true},
    appointmentTime:{type:String,required:true},
    reasonForVisit:{type:String,required:true},
    status:{type:String,enum:["BOOKED","CHECKUP-PENDING","CHECKUP-DONE"],default:"BOOKED"}
});


const Patient=new mongoose.model("Patient",OPDBookingSchema);

module.exports=Patient;
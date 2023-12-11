const express=require("express");
require("dotenv").config();
const app=express();
const connection=require('./Database/database');
const PatientRoute=require('./Routes/PatientRoutes')

connection();

const cors=require("cors");
const database = require("./Database/database");

app.use(express.json());
app.use(cors());
app.use(PatientRoute);

const PORT=process.env.PORT;
app.listen(PORT,console.log(`Listening on port : ${PORT}`));
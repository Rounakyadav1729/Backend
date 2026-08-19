
const express = require("express");
// const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const Userrr = require("./models/user");
const Student = require("./models/student");
const Routes = require("./routes/route")
const cors = require("cors");
const studentRoutes =  require('./routes/studentRoutes')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", studentRoutes);



//  for checking backend is running or not
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Backend Running Successfully"
    });
    console.log('Running perfectly')
});
//user data 
app.get("/user", async (req, res ) => {
    try{
        const user = await Userrr.find().limit(3);
        res.json(user);
        console.log('succesfully send')
    }
    catch(err){
        res.status(500).json({message:err.message});
        console.log('edhe bhi aa gayee error yrr')

    }
})

// Global Error Handler
module.exports = app;
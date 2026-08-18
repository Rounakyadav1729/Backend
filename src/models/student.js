const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    Class: {
      type: String,
      required: true,
      trim: true,
    },
    Section: {
      type: String,
      required: true,
      trim: true,
    },
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    Gender: {
      type: String,
      required: true,
      trim: true,
    },
    
    SchoolId:{
      type:String,
      required:true,
      trim:true

    },
    "Student PEN": {
      type: Number,
      required: true,
    },
    "Father Name": {
      type: String,
      required: true,
      trim: true,
    },
    "Mother Name": {
      type: String,
      required: true,
      trim: true,
    },
    "Social Category": {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    collection: "Information", 
  }
);

module.exports = mongoose.model("Student", studentSchema);
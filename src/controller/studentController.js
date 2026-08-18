const Student = require("../models/student.js")

const getstudent = async (req, res) => {
  try {
     
    const users = await Student.find({}).limit(5);
    
    res.json(users);
    console.log("aa rha hai bhai");
    
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("error from the backend");
  }
};
module.exports = getstudent;
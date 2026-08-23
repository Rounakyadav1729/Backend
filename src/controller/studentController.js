const Student = require("../models/student.js")
// get student detail for the school
const getstudent = async (req, res) => {
  try {
     
    const student = await Student.find({schoolId:req.schoolId}); 
    if (!student) {
      res.status(404).json({
        message: "Students not found"
      });
    }
    
    res.status(200).json({
      success: true,
      message: "Students fetched successfully",
      student : student,
    });
    
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// delete student
const deletestudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete student",
    });
  }
};
// Updat student details
const updatedStudent= async (req, res) => {
  try {

      const { id } = req.params;

      const updatedStudent = await Student.findByIdAndUpdate(
          id,
          {
              Name: req.body.name,
              Class: req.body.class,
              Gender: req.body.gender
          },
          {
              new: true,
              runValidators: true
          }
      );

      if (!updatedStudent) {
          return res.status(404).json({
              message: "Student not found"
          });
      }

      res.json({
          success: true,
          message: "Student updated successfully",
          student: updatedStudent
      });

  } catch (error) {
      console.log('not update')
      res.status(500).json({
          message: error.message
          
      });

  }
};

module.exports = {getstudent , deletestudent,updatedStudent};
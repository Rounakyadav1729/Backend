const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt");
const Admin = require("../models/user")

const login = async (req, res) => {
    
  try {
    const { udise, password } = req.body;
    const school = await Admin.findOne({ udise });
    if (!school) {
      return res.status(404).json({
        message: "School not found",
      });
    }

     const isMatch = await bcrypt.compare(password, school.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid Password"
            });
        }
     const token = jwt.sign(

            {
                schoolId: school._id,
                schoolName: school.name
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "1d"
            }

        );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,

      school: {
        id: school._id,
        schoolName: school.name,
        udise: school.udise,
      },
      
    }
);
  } 
  catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}
// check token validity for admin
const checkToken = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({
      success: true,
      message: "Token is valid",
      decoded,
    });
  }
  catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}
// get api for admin information
const getadmin = async (req, res) => {
  try{
  const admin = await Admin.findById(req.schoolId).select("-password");
  if(!admin){
     return res.status(404).json({
      message:'admin not found'
      })
    }
  
  res.status(200).json({
    success:'true',
    admin : admin})
  }
  catch(error){
    console.error(error);
    res.status(500).json({
      message : "Server Error"
    })

  }
}
module.exports = { login, checkToken , getadmin };
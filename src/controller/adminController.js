const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt");
const admin = require("../models/user")

const login = async (req, res) => {
    console.log('hi')
  try {
    const { udise, password } = req.body;
    const school = await admin.findOne({ udise });
    if (!school) {
      return res.status(404).json({
        message: "School na na not found",
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
module.exports = login;
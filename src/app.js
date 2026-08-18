
const express = require("express");
// const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const Userrr = require("./models/user");
const Student = require("./models/student");
const Routes = require("./routes/route")
// const cors = require("cors");
const studentRoutes =  require('./routes/studentRoutes')

const app = express();

// Middlewares
// app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   }),
// );

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// Routes
// app.use("/api/auth", authRoutes);
app.use("/", studentRoutes);
// app.use('/hi', Routes);
// app.use('/hi', require('./routes/studentRoutes'));

// Health Check
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Backend Running Successfully"
    });
    console.log('sbb kuch shi chl rha hai')
});
// app.post("/login", async (req, res) => {
//     console.log('hi')
//   try {
//     const { udise, password } = req.body;
//     console.log(udise)
//     const school = await Userrr.findOne({ udise });
//     if (!school) {
//       return res.status(404).json({
//         message: "School na na not found",
//       });
//     }

    

//     if (school.password!= password) {
//       return res.status(401).json({
//         message: "Invalid Password",
//       });
//     }
//      const token = jwt.sign(

//             {
//                 schoolId: school._id,
//                 schoolName: school.name
//             },

//             process.env.JWT_SECRET,

//             {
//                 expiresIn: "1m"
//             }

//         );

//     res.status(200).json({
//       success: true,
//       message: "Login Successful",
//       token,

//       school: {
//         id: school._id,
//         schoolName: school.name,
//         udise: school.udise,
//       },
      
//     }
// );console.log(school.password)
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// });
app.get("/data", async (req, res) => {
  try {
     
    const users = await Student.find({}).limit(5);
    // const users = await Student.find().limit();
    res.json(users);
    console.log("aa rha hai bhai");
    // console.log(req.schoolId,req.token);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("error to hai abhi bhi aa gaye yrr");
  }
});
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
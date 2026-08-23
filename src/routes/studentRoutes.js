const express = require("express");
const  {getstudent , deletestudent , updatedStudent} = require("../controller/studentController")
const {login, checkToken ,getadmin} = require("../controller/adminController")
const auth = require("../middlewares/auth")

const router = express.Router();

// get student api
router.get("/student",auth, getstudent);
router.delete("/student/:id", deletestudent);
router.put("/student/update/:id",updatedStudent);

// get admin api

//login and checktoken apis
router.get("/check-token", checkToken);
router.post("/login", login);
router.get("/admin" , auth , getadmin)

module.exports = router;
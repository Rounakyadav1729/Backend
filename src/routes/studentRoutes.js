const express = require("express");
const  getstudent = require("../controller/studentController")
const login = require("../controller/adminController")
const auth = require("../middlewares/auth")
const router = express.Router();


router.get("/student",auth, getstudent);
router.post("/login", login);
module.exports = router;
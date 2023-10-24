const express = require("express");
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../models/UserSchema");
const Doctor = require("../models/DoctorSchema");
const sendToken = require("../utils/sendToken");

// signup

router.post("/register", async (req, res, next) => {
  const { email, password, name, role, gender } = req.body;

  try {
    let user = null;

    if (role === "patient") {
      user = await User.findOne({ email });
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email });
    }

    if (user) {
      return next(new ErrorHandler("user Already Exist", 400));
    }

    if (role === "patient") {
      user = await User.create(req.body);
    } else if (role === "doctor") {
      user = await Doctor.create(req.body);
    }

    return res
      .status(200)
      .json({ success: true, message: "successfull register" });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
});

// login
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let user = null;

    if (!email || !password) {
      return next(new ErrorHandler("Please provide all fields", 404));
    }

    const findUser = await User.findOne({ email });
    const findDoctor = await Doctor.findOne({ email });

    if (findUser) {
      user = findUser;
    }
    if (findDoctor) {
      user = findDoctor;
    }

    if (!user) {
      return next(new ErrorHandler("User Not Found", 400));
    }

    const correctPassword = await user.comparePassword(password);

    if (!correctPassword) {
      return next(new ErrorHandler("some thing is wrong", 400));
    }

    return sendToken(user, 201, res);
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
});

// logout user
router.get("/logout", async (req, res, next) => {
  try {
    res
      .status(201)
      .cookie("token", null)
      .json({ success: true, message: "logout successfull" });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

module.exports = router;

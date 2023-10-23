const express = require("express");
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../models/UserSchema");
const Booking = require("../models/BookingSchema");
const { isAuthenticated, restrict } = require("../middleware/auht");
const Doctor = require("../models/DoctorSchema");

// get user
router.get(
  "/get-user/:id",
  isAuthenticated,
  restrict(["patient"]),
  async (req, res, next) => {
    const { id } = req.params;

    try {
      const findUser = await User.findById(id).select("-password");

      if (!findUser) {
        return next(new ErrorHandler("user not found", 400));
      }

      res.status(201).json({ succuss: true, user: findUser });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  }
);

// edit user
router.put(
  "/edit-user/:id",
  isAuthenticated,
  restrict(["patient"]),
  async (req, res, next) => {
    const { id } = req.params;

    try {
      const findUser = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      if (!findUser) {
        return next(new ErrorHandler("user not found", 400));
      }

      res.status(201).json({ succuss: true, user: findUser });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  }
);

// delete user
router.delete(
  "/delete-user/:id",
  isAuthenticated,
  restrict(["patient"]),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const userDeleted = await User.findByIdAndRemove(id);

      if (!userDeleted) {
        return next(new ErrorHandler("user not found", 400));
      }

      res
        .status(201)
        .json({ success: true, message: "delete user successfull" });
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

// get all users
router.get(
  "/",
  isAuthenticated,
  restrict(["admin"]),
  async (req, res, next) => {
    try {
      const users = await User.find();

      res.status(201).json({ success: true, users });
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

router.get("/profile/me", isAuthenticated, restrict(["patient"]), async (req, res,next) => {
  const id = req.userId;
  try {
    const findUser = await User.findById(id).select("-password");

    if (!findUser) {
      return next(new ErrorHandler("user not found", 400));
    }

    res.status(201).json({ succuss: true, user: findUser });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
});

router.get("/appiontments/myAppiontments", isAuthenticated, restrict(["patient"]), async (req,res, next) => {
    const userId = req.userId;
  try {

    const booking = await Booking.find({user:userId})

    const doctorsIds = booking.map(item => item.doctor)

    const doctors = await Doctor.find({_id: {$in: doctorsIds}})

    res.status(201).json({
      success: true,
      doctors
    })
    
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
})

module.exports = router;

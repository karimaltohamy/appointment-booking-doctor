const express = require("express");
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler");
const Doctor = require("../models/DoctorSchema");
const { isAuthenticated, restrict } = require("../middleware/auht");
const Booking = require("../models/BookingSchema");

// get doctor
router.get("/get-doctor/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const findDoctor = await Doctor.findById(id).populate({
        path: "reviews",
        select: "doctor user reviewText rating createdAt"
    }).select("-password")

    if (!findDoctor) {
      return next(new ErrorHandler("doctor not found", 400));
    }

    res.status(201).json({ succuss: true, info: findDoctor });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
});

// edit doctor
router.put("/edit-doctor/:id", isAuthenticated, restrict(["doctor"]), async (req, res, next) => {
  const { id } = req.params;

  try {
    const findDoctor = await Doctor.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!findDoctor) {
      return next(new ErrorHandler("doctor not found", 400));
    }

    res.status(201).json({ succuss: true, info: findDoctor });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
});

// delete doctor
router.delete("/delete-doctor/:id",isAuthenticated, restrict(["doctor"]), async (req, res, next) => {
  const { id } = req.params;
  try {
    const doctorDeleted = await Doctor.findByIdAndRemove(id);

    if (!doctorDeleted) {
      return next(new ErrorHandler("doctor not found", 400));
    }

    res
      .status(201)
      .json({ success: true, message: "delete doctor successfull" });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// get all doctors
router.get("/", async (req, res, next) => {
  const {query} = req.query;
  try {
    let doctors = []
    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: {$regex: query, $options: "i"} },
          { specialization: {$regex: query, $options: "i" }},
        ],
      }).select("-password")
    } else {
      doctors = await Doctor.find({isApproved: "approved"}).select("-password")
    }

    res.status(201).json({ success: true, info:doctors });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

router.get("/profile/me", isAuthenticated, restrict(["doctor"]), async (req, res, next) => {
  const doctorId = req.userId

  try {
      const findDoctor = await Doctor.findById(doctorId).select("-password")

      if (!findDoctor) {
        return next(new ErrorHandler("doctor not found", 400));
      }

      const appiontments = await Booking.find({doctor: doctorId})

      res.status(201).json({success: true, info: {...info, appiontments}})
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
})

module.exports = router;

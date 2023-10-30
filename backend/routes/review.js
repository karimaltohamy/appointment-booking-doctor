const express = require("express");
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler");
const Review = require("../models/ReviewSchema")
const Doctor = require("../models/DoctorSchema");
const { isAuthenticated, restrict } = require("../middleware/auht");

// get all review
router.get("/", async (req, res, next) => {
    try {
        const reviews = await Review.find({})

        res.status(201).json({success: true, reviews})
        
    } catch (error) {
        return next(new ErrorHandler(error, 400));
    }
})

// create review
router.post("/:doctorId/review", isAuthenticated, restrict(["patient"]), async (req, res, next) => {
    try {
        if (!req.body.doctor) req.body.doctor = req.params.doctorId 
        if (!req.body.user) req.body.user = req.userId 

        const review = new Review(req.body)

        await review.save()

        const updateDoctor = await Doctor.findByIdAndUpdate(req.body.doctor, {$push: {reviews: review._id}})

        res.status(201).json({success: true, message: "created review", review})
        
        
    } catch (error) {
        return next(new ErrorHandler(error, 400));
    }
})

// get doctor reviews
// router.get("/")

module.exports = router
const express = require("express");
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler");
const Booking = require("../models/BookingSchema");

router.post("/create-booking", async (req, res, next) => {
  console.log(req.body);

  try {
    if (!req.body.ticketPrice) {
      return next(new ErrorHandler("something is error", 400));
    }

    const book = await Booking.create(req.body);

    res.status(201).json({ success: true, info: book });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
});

module.exports = router;

const ErrorHandler = require("../utils/ErrorHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");
const Doctor = require("../models/DoctorSchema");

const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  try {
    if (!token) {
      return next(new ErrorHandler("Please log in to continue", 400));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return next(new ErrorHandler("JWT token has expired", 401)); // You can choose an appropriate status code (e.g., 401 Unauthorized)
    }

    return next(new ErrorHandler(error.message, 400)); // Handle other errors
  }
};

const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;

  let user = {};

  const patient = await User.findById(userId);
  const doctor = await Doctor.findById(userId);

  if (patient) {
    user = patient;
  } else if (doctor) {
    user = doctor;
  }

  if (!roles.includes(user.role)) {
    return next(new ErrorHandler("you are not authorized", 400));
  }

  next();
};

module.exports = { isAuthenticated, restrict };

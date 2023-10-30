const  mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const DoctorSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  photo: { type: String },
  ticketPrice: { type: Number },
  gender: { type: String, enum: ["male", "female", "other"] },
  role: {
    type: String,
  },

  // Fields for doctors only
  specialization: { type: String },
  qualifications: {
    type: Array,
  },

  experiences: {
    type: Array,
  },

  bio: { type: String, maxLength: 50 },
  about: { type: String },
  timeSlots: { type: Array },
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
  averageRating: {
    type: Number,
    default: 0,
  },
  totalRating: {
    type: Number,
    default: 0,
  },
  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

// hash password
DoctorSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
})

// jwt token
DoctorSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id, role: this.role }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// compare password
DoctorSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Doctor", DoctorSchema);

const mongoose = require("mongoose");
const Doctor = require("./DoctorSchema");

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo _id",
  });

  next();
});

reviewSchema.statics.calcAvrageRating = async function (doctorId)  {
  const stats = await this.aggregate([
    { $match: { doctor: doctorId } },
    {
      $group: {
        _id: "$doctor",
        numOfRating: { $sum: 1 },
        avRating: { $avg: "$rating" },

      },

    },
  ]);

  await Doctor.findByIdAndUpdate(doctorId, {
    averageRating: stats[0].avRating,
    totalRating: stats[0].numOfRating,
  });
};

reviewSchema.post("save", function () {
  this.constructor.calcAvrageRating(this.doctor);
});

module.exports = mongoose.model("Review", reviewSchema);

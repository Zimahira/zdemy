const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  purchasedCourses: [
    {
      courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
      transactionRef: String,
      amount: Number,
      status: String,
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);

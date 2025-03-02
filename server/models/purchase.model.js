const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  transactionRef: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  purchasedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Purchase", PurchaseSchema);

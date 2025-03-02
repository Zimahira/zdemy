const Purchase = require("../models/purchase.model.js");
const User = require("../models/user.model.js");

const purchaseCourse = async (req, res) => {
  console.log("purchase request:", req.body);

  try {
    const { userId, courseId, transactionRef, amount, status } = req.body;

    if (!userId || !courseId) {
      console.error(" Missing userId");
      return res.status(400).json({ message: "Missing userId" });
    }

    const user = await User.findById(email);
    if (!user) {
      console.error(" User not found in database!");
      return res.status(404).json({ message: "User not found" });
    }

    const newPurchase = new Purchase({
      userId,
      courseId,
      transactionRef,
      amount,
      status,
    });

    await newPurchase.save();
    console.log(" Purchase saved successfully:", newPurchase);

    user.purchasedCourses.push({ courseId, transactionRef, amount, status });
    await user.save();
    console.log(" User updated successfully!");

    res.status(201).json({ message: "Purchase saved successfully" });
  } catch (error) {
    console.error(" Error saving purchase:", error);
    res.status(500).json({ message: "Error saving purchase", error });
  }
};

const getUserPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find({
      userId: req.params.userId,
    }).populate("courseId");
    res.status(200).json(purchases);
  } catch (error) {
    console.error("Fetch purchases error:", error);
    res.status(500).json({ message: "Error fetching purchases", error });
  }
};

module.exports = { purchaseCourse, getUserPurchases };

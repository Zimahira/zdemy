const express = require("express");
const {
  purchaseCourse,
  getUserPurchases,
} = require("../controller/purchase.controller.js");

const router = express.Router();

router.post("/", purchaseCourse);
router.get("/:userId", getUserPurchases);

module.exports = router;

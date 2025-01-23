const express = require("express");
const { createUser, loginUser } = require("../controller/user.controller");
const router = express.Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
// // router.get("/", getUser);
// // router.delete("/", deleteUser);

module.exports = router;

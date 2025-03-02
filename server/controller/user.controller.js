const bcrypt = require("bcrypt");
const ADMIN_PASSCODE = "234234";
const User = require("../models/user.model.js");

const createUser = async (req, res) => {
  const { name, email, password, role, adminPasscode } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({
      success: false,
      message: "Name, email, password, and role are required.",
    });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exists.",
    });
  }

  if (role === "admin") {
    if (adminPasscode !== ADMIN_PASSCODE) {
      return res.status(403).json({
        success: false,
        message: "Invalid admin passcode.",
      });
    }
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  return res.status(201).json({
    success: true,
    message: "User created successfully.",
    userData: { name: user.name, email: user.email, role: user.role },
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required.",
    });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User not found.",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      success: false,
      message: "Invalid password.",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Login successful.",
    userData: { name: user.name, email: user.email, role: user.role },
  });
};

module.exports = { createUser, loginUser };

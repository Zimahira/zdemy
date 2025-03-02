const ensureAdmin = (req, res, next) => {
  const user = req.user;
  const adminPasscode = req.body.adminPasscode;

  if (user && user.role === "admin") {
    if (adminPasscode === ADMIN_PASSCODE) {
      next();
    } else {
      res
        .status(403)
        .json({ success: false, message: "Invalid admin passcode." });
    }
  } else {
    res
      .status(403)
      .json({ success: false, message: "Access denied. Admins only." });
  }
};

module.exports = ensureAdmin;

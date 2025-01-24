const express = require("express");
const {
  addCourse,
  getCourses,
  deleteCourse,
} = require("../controller/course.controller");
const uploadMiddleware = require("../middlewares/upload.middleware");
const router = express.Router();

// /api/course/ DELETE
router.post("/", uploadMiddleware.handleUpload, addCourse);
router.get("/", getCourses);
router.delete("/:courseId", deleteCourse);

module.exports = router;

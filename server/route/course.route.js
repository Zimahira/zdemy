const express = require("express");
const {
  addCourse,
  getCourses,
  deleteCourse,
  getCourseById,
} = require("../controller/course.controller");
const uploadMiddleware = require("../middlewares/upload.middleware");
const router = express.Router();

router.post("/", uploadMiddleware.handleUpload, addCourse);
router.get("/", getCourses);
router.get("/:courseId", getCourseById);
router.delete("/:courseId", deleteCourse);

module.exports = router;

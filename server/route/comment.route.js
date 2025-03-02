const express = require("express");

const uploadMiddleware = require("../middlewares/upload.middleware");
const {
  addComment,
  getComment,
  deleteComment,
} = require("../controller/comment.controller");
const router = express.Router();

router.post("/", uploadMiddleware.handleUpload, addComment);
router.get("/", getComment);
router.delete("/:commentId", deleteComment);

module.exports = router;

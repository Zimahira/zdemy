const express = require("express");
const {
  addComment,
  getComment,
  deleteComment,
} = require("../controller/comment.controller");
const router = express.Router();

// /api/comment/ DELETE
router.post("/", addComment);
router.get("/", getComment);
router.delete("/:commentId", deleteComment);

module.exports = router;

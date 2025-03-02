const Comment = require("../models/comment.models.js");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dj7s3epvy",
  api_key: "765976322779619",
  api_secret: "aw_mNazvWsVp4zwEL_nFwo5l8Us",
});

const addComment = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Please log in.",
      });
    }

    const { comment } = req.body;
    const name = req.user.name;

    if (!comment) {
      return res.status(400).json({
        success: false,
        message: "Comment is required.",
      });
    }

    const newComment = await Comment.create({
      name,
      comment,
    });

    return res.status(201).json({
      success: true,
      message: "Comment added successfully.",
      commentData: newComment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error. Could not add comment.",
      error: error.message,
    });
  }
};

const getComment = async (req, res) => {
  try {
    const comments = await Comment.find({}).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "The available comments",
      commentData: comments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error. Could not retrieve comments.",
      error: error.message,
    });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    if (!commentId) {
      return res.status(400).json({
        success: false,
        message: "Comment ID is required.",
      });
    }

    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).json({
        success: false,
        message: "Comment not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Comment deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error. Could not delete comment.",
      error: error.message,
    });
  }
};

module.exports = { addComment, getComment, deleteComment };

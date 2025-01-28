const Comment = require("../models/comment.models.js");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dj7s3epvy",
  api_key: "765976322779619",
  api_secret: "aw_mNazvWsVp4zwEL_nFwo5l8Us",
});

const addComment = async (req, res) => {
  const { comment } = req.body;

  if (!comment) {
    return res.status(400).json({
      success: false,
      message: "All fields must be filled, including files.",
    });
  }

  const newComment = await Comment.create({
    name: comment,
  });

  return res.status(201).json({
    success: true,
    message: "comment added  successfully.",
    commentData: {
      comment: newComment.comment,
    },
  });
};

const getComment = async (req, res) => {
  const comment = await Comment.find({});

  return res.status(200).json({
    success: true,
    message: "the available comment",
    commentData: comment,
  });
};

const deleteComment = async (req, res) => {
  let { commentId } = req.params;
  console.log("commentId: ", commentId);
  const deletee = await Comment.deleteOne({ _id: commentId });
  console.log("deletee: ", deletee);
  //
  return res.status(200).json({
    success: true,
    message: "comment deleted",
  });
};

module.exports = { addComment, getComment, deleteComment };

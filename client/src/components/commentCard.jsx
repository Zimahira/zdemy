import React from "react";
import "../styles/CommentCard.css";

const CommentCard = ({ comment }) => {
  console.log(comment);

  return (
    <div className="comment-card">
      <div className="comment-info">
        <h3 className="comment-title">{comment.name}</h3>
        <button className="comment-btn">View Details</button>
      </div>
    </div>
  );
};

export default CommentCard;

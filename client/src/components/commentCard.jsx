import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../styles/CommentCard.css";

const CommentCard = ({ comment }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="comment-card">
      <div className="comment-header">
        <h3 className="comment-title">{comment?.name}</h3>
        <button
          className="toggle-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {isExpanded && (
        <div className="comment-content">
          <p className="comment-text">{comment?.comment}</p>
          <p className="comment-date">
            Posted on: {new Date(comment?.createdAt).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default CommentCard;

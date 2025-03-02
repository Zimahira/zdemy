import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";
import CommentCard from "../components/commentCard";

const Comment = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/comment`);
        if (response.data.success) {
          setComments(response.data.commentData);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div>
      <h2>All Comments</h2>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentCard key={comment._id} comment={comment} />
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default Comment;

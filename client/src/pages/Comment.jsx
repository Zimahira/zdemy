import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const Comment = () => {
  const [commentDetails, setCommentDetails] = useState({
    comment: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedObject = { ...commentDetails, [name]: value };
    setCommentDetails(updatedObject);
  };

  const { isPending, isError, isSuccess, data, mutate } = useMutation({
    mutationFn: async (val) => {
      const response = await axios.post(`${BASE_URL}/comment`, val);
      return response.data;
    },
  });

  useEffect(() => {
    console.log("data: ", data);

    if (isSuccess && data?.success) {
      alert(data?.message);
      return;
    }
    if (isError && !data?.success) {
      alert(data?.message);
      return;
    }
  }, [isPending, isError, isSuccess, data]);

  const handleSubmit = async () => {
    mutate(commentDetails);
  };

  return (
    <>
      <div className="box">
        <div className="courseEditBox">
          <h2>COMMENT</h2>

          <div className="inputs">
            <label htmlFor="Comment">Comment Below</label>
            <input
              className="comment"
              type="text"
              name="comment"
              value={commentDetails.comment}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submitBtn" onClick={handleSubmit}>
            Add comment
          </button>
        </div>
      </div>
    </>
  );
};

export default Comment;

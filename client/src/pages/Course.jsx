import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const Course = () => {
  const [courseDetails, setCourseDetails] = useState({
    courseName: "",
    price: "",
    details: "",
    course: "",
    file: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedObject = { ...courseDetails, [name]: value };
    setCourseDetails(updatedObject);
  };

  const handleFileChange = (event) => {
    const { name } = event.target;
    const files = Array.from(event.target.files);
    const updateCourseDetails = { ...courseDetails, [name]: files[0] };
    setCourseDetails(updateCourseDetails);
  };

  const formData = new FormData();

  for (const key in courseDetails) {
    if (courseDetails[key]) {
      formData.append(key, courseDetails[key]);
    }
  }
  const { isPending, isError, isSuccess, data, mutate } = useMutation({
    mutationFn: async () => {
      const response = await axios.post(`${BASE_URL}/course`, formData);
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
    mutate(formData);
  };

  return (
    <>
      <div className="box">
        <div className="courseEditBox">
          <h2>Add a New Course</h2>

          <div className="inputs">
            <label htmlFor="Course Name">Course Name</label>
            <input
              className="courseName"
              type="text"
              name="courseName"
              value={courseDetails.courseName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputs">
            <label htmlFor="Course price">Course Price</label>
            <input
              className="price"
              type="Number"
              name="price"
              value={courseDetails.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputs">
            <label htmlFor="Course details">Course details</label>
            <input
              className="details"
              type="text"
              name="details"
              value={courseDetails.details}
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputs">
            <label htmlFor="Course">Course notes</label>
            <input
              className="course"
              type="text"
              name="course"
              value={courseDetails.course}
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputs">
            <label htmlFor="Image">Image </label>
            <input
              className="image"
              type="file"
              name="file"
              onChange={handleFileChange}
              required
            />
          </div>

          <button type="submit" className="submitBtn" onClick={handleSubmit}>
            Add course
          </button>
        </div>
      </div>
    </>
  );
};

export default Course;

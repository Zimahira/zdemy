import React, { useState, useEffect } from "react";
import "../styles/AllCourses.css";
import { BASE_URL } from "../../constants";
import { useNavigate } from "react-router";

const AllCourses = () => {
  const nav = useNavigate();
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const response = await fetch(`${BASE_URL}/course`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  };

  const handleDelete = async (courseId) => {
    const response = await fetch(`${BASE_URL}/api/course/${courseId}`, {
      method: "DELETE",
    });

    let data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchAllCourses = async () => {
      const { courseData } = await fetchCourses();
      setCourses(courseData);
      console.log(courseData);
    };
    fetchAllCourses();
  }, []);

  const handleUpdate = () => {};

  const handleAddCourse = () => {
    nav("/courses");
  };

  return (
    <div className="all-courses">
      <div className="header">
        <h1>All Courses</h1>
        <button className="add-course-btn" onClick={handleAddCourse}>
          Add Course
        </button>
      </div>
      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <div className="course-list">
          {courses.map((course, index) => (
            <li key={course.id} className="course-item">
              <span>{index + 1}. </span>
              <div>{course.name}</div> - {course.details} - ${course.price}
              <button
                className="update-btn"
                onClick={() => handleUpdate(course.id)}
              >
                Update
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(course.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCourses;

//! CRUD

//* GET /api/course
// frontend - no body in request
// backend - sends data in response

//* POST /api/course
// frontend - send body in request
// backend - sends data in request

//* GET /api/course/courseId
// frontend - send id in url
// backend - sends data in request

//* UPDATE /api/course/courseId

//* DELETE /api/course/courseId

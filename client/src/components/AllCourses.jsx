import React, { useState, useEffect } from "react";
import "../styles/AllCourses.css";
import { BASE_URL } from "../../constants";
import { useNavigate } from "react-router";

const AllCourses = () => {
  const nav = useNavigate();
  const [courses, setCourses] = useState([]);

  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  console.log(userData);

  const fetchCourses = async () => {
    try {
      const response = await fetch(`${BASE_URL}/course`, { method: "GET" });
      const data = await response.json();
      setCourses(data.courseData);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleDelete = async (courseId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${BASE_URL}/course/${courseId}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (response.ok) {
        setCourses((prevCourses) =>
          prevCourses.filter((course) => course._id !== courseId)
        );
      } else {
        console.error("Error deleting course:", data.message);
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleUpdate = (courseId) => {
    nav(`/update-course/${courseId}`);
  };

  const handleAddCourse = () => {
    nav("/add-course");
  };

  const handleViewDetails = (id) => {
    nav(`/course/${id}`);
  };

  const handleBuyCourse = (id) => {
    nav(`/Courses/${id}`);
  };

  return (
    <div className="all-courses">
      <div className="header">
        <h1>All Courses</h1>
        {userData && userData.role === "admin" && (
          <button className="add-course-btn" onClick={handleAddCourse}>
            Add Course
          </button>
        )}
      </div>
      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <ul className="course-list">
          {courses.map((course, index) => (
            <li key={course._id} className="course-item">
              <span>{index + 1}. </span>
              <div className="courseName">{course.name}</div> -{" "}
              <div className="courseDetails">{course.details} </div>-
              <div className="coursePrice">${course.price}</div>
              {userData && userData.role === "admin" ? (
                <>
                  <button
                    className="update-btn"
                    onClick={() => handleUpdate(course._id)}
                  >
                    Update
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(course._id)}
                  >
                    Delete
                  </button>
                </>
              ) : (
                <button
                  className="buy-btn"
                  onClick={() => handleBuyCourse(course._id)}
                >
                  Buy
                </button>
              )}
              <button onClick={() => handleViewDetails(course._id)}>
                View Details
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllCourses;

import React from "react";
import "../styles/CourseCard.css";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="course-image-container">
        <img src={course.imageUrl} alt={course.name} className="course-image" />
      </div>
      <div className="course-info">
        <h3 className="course-title">{course.name}</h3>
        <p className="course-description">{course.details}</p>
        <p className="course-category">{course.course}</p>
        <p className="course-price">${course.price}</p>
        <button className="enroll-btn">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseCard;

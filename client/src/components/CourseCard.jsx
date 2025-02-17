import React from "react";
import "../styles/CourseCard.css";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.imageUrl} alt={course.name} className="course-image" />
      <div className="course-info">
        <h3 className="course-title">{course.name}</h3>
        <p className="course-description">{course.details}</p>
        <p className="course-description">{course.course}</p>
        <p className="course-description">${course.price}</p>
      </div>
    </div>
  );
};

export default CourseCard;

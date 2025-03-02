import React, { useState, useEffect } from "react";
import "../styles/LandingPage.css";
import NavBar from "../components/NavBar";
import img from "../images/bitmoji.png";
import CourseCard from "../components/CourseCard";
import PartnerBanner from "../components/PartnerBanner";
import FeaturesSection from "../components/FeaturesSection";
import Stories from "../components/Stories";
import CommentCard from "../components/commentCard";
import { BASE_URL } from "../../constants";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const nav = useNavigate();
  const [visibleCourses, setVisibleCourses] = useState(4);
  const [courses, setCourses] = useState([]);
  const [comments, setComments] = useState([]);
  const [visibleComments, setVisibleComments] = useState(4);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const userRole = userData?.role;
  const isLoggedIn = !!userData;

  useEffect(() => {
    const getCourses = async () => {
      const response = await fetch(`${BASE_URL}/course`, { method: "GET" });
      const data = await response.json();
      setCourses(data.courseData);
    };
    getCourses();
  }, []);

  useEffect(() => {
    const getComments = async () => {
      const response = await fetch(`${BASE_URL}/comment`, { method: "GET" });
      const data = await response.json();
      setComments(data.commentData);
    };
    getComments();
  }, []);

  const handleShowMore = () => {
    nav("/Courses");
  };

  const handleComments = () => {
    nav("/comment");
  };

  return (
    <>
      <NavBar />
      <div className="box">
        <div className="welcomeBox">
          <img src={img} alt="Bitmoji" className="img" />
          <div className="quote">
            <h1 className="quote-text">
              HELLO, Welcome to ZDEMY where all the skills you need in one place
            </h1>
          </div>
        </div>
      </div>

      <div className="landing-statement">
        <h1 className="landing-heading">
          All the skills you need in one place
        </h1>
        <p className="landing-paragraph">
          From critical skills to technical topics, Udemy supports your
          professional development.
        </p>
      </div>

      <div className="courses-section">
        <h2 className="courses-heading">Featured Courses</h2>
        <div className="courses-container">
          {courses.slice(0, visibleCourses).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <button className="show-more-btn" onClick={handleShowMore}>
          Show More
        </button>
      </div>

      <PartnerBanner className="partner-banner" />
      <FeaturesSection className="features-section" />
      <Stories className="stories-section" />

      <div className="comment-section">
        <h2 className="comment-heading">Comments</h2>
        <div className="comment-container">
          {comments.slice(0, visibleComments).map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      </div>

      <button className="comment-btn" onClick={handleComments}>
        Comment
      </button>
    </>
  );
};

export default LandingPage;

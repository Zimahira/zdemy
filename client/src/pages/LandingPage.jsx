import React, { useState } from "react";
import "../styles/LandingPage.css";
import NavBar from "../components/NavBar";
import img from "../images/bitmoji.png";
import CourseCard from "../components/CourseCard";
import AllCourses from "../components/AllCourses";
import PartnerBanner from "../components/PartnerBanner";
import FeaturesSection from "../components/FeaturesSection";
import Stories from "../components/Stories";
import { BASE_URL } from "../../constants";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const nav = useNavigate();
  const [visibleCourses, setVisibleCourses] = useState(4);
  const [showMoreButton, setShowMoreButton] = useState(true);
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const response = await fetch(`${BASE_URL}/course`, {
      method: "GET",
    });

    let data = await response.json();
    return data;
  };

  useEffect(() => {
    const callGetCourses = async () => {
      const { courseData } = await getCourses();
      setCourses(courseData);
    };
    callGetCourses();
  }, []);

  const handleShowMore = () => {
    nav("/allCourses");
  };

  return (
    <>
      <NavBar />
      <div className="box">
        <div className="welcomeBox">
          <img src={img} alt="Bitmoji" className="img" />
          <div className="quote">
            <h1>
              HELLO, Welcome to ZDEMY where all the skills you need in one place
            </h1>
          </div>
        </div>
      </div>
      <h1>All the skills you need in one place</h1>
      <p>
        From critical skills to technical topics, Udemy supports your
        professional development.
      </p>

      <div className="courses-section">
        <h2>Featured Courses</h2>
        <div className="courses-container">
          {courses.slice(0, visibleCourses).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {showMoreButton && (
          <button className="show-more-btn" onClick={handleShowMore}>
            Show More
          </button>
        )}
      </div>

      <PartnerBanner />
      <FeaturesSection />
      <Stories />
    </>
  );
};

export default LandingPage;

import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "../styles/Stories.css";

const stories = [
  {
    logo: "https://cms-images.udemycdn.com/96883mtakkm8/5V0hDnhhh2fSRa52V5cSEo/bde951fca77bf8b4f8010a60679b4ce4/logo-boozallenhamilton-2.svg",
    heading:
      "Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling",
    stat1: "93%",
    stat1Label: "retention rate among participating employees",
    stat2: "65%",
    stat2Label: "of learners noted a positive impact on their productivity",
    image:
      "https://cms-images.udemycdn.com/content/c4gpjcmcsk/png/UB_Case_Studies_Booz_Allen_image.png?position=c&quality=80&x.app=portals",
    link: "https://business.udemy.com/case-studies/booz-allen/?ref=booz_allen_cta",
  },
  {
    logo: "https://cms-images.udemycdn.com/96883mtakkm8/4xxiw3L8tPFq9If2UpielM/44483c55e7e23bd33472d30fa122982d/logo-capitalone-2.svg",
    heading:
      "Capital One Accelerates Transformational Learning through Udemy Business",
    stat1: "95%",
    stat1Label: "of learners rated Udemy as “very helpful” to their success",
    stat2: "65%",
    stat2Label: "increase in retention for in-demand tech roles",
    image:
      "https://cms-images.udemycdn.com/96883mtakkm8/3tdKdJqRtZAyDDmdZR3qGV/eaf1d940743664c58edc9260842498d7/capitalone-2x.png",
    link: "https://business.udemy.com/case-studies/capital-one/?ref=capital_one_cta",
  },
  {
    logo: "https://cms-images.udemycdn.com/96883mtakkm8/7t3OTcocacVyt6MzWIMtZT/9e7032d7afda76eaa05a30950af8035f/logo-eventbrite-1.svg",
    heading:
      "Eventbrite Navigates Change Through Skill-Building and Leadership Development",
    stat1: "4,800+",
    stat1Label:
      "increase in employee enrollments for professional development courses",
    stat2: "65%",
    stat2Label:
      "revenue growth supported by a business model backed by learning",
    image:
      "https://cms-images.udemycdn.com/96883mtakkm8/2OmbIN8MOcdVxDzlqQz4Dc/3471754f5a5f41a7f1c49f05ecfaa4b8/eventbrite-2x.png",
    link: "https://business.udemy.com/case-studies/eventbrite/?ref=eventbrite_cta",
  },
];

const Stories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? stories.length - 1 : prevIndex - 1
    );
  };

  const { logo, heading, stat1, stat1Label, stat2, stat2Label, image, link } =
    stories[currentIndex];

  return (
    <div className="carousel-container">
      <div className="carousel-item">
        <div className="carousel-content">
          <img src={logo} alt="Company logo" className="company-logo" />
          <h2>{heading}</h2>
          <div className="stats">
            <div className="stat">
              <span className="stat-value">{stat1}</span>
              <span className="stat-label">{stat1Label}</span>
            </div>
            <div className="stat">
              <span className="stat-value">{stat2}</span>
              <span className="stat-label">{stat2Label}</span>
            </div>
          </div>
          <a href={link} target="_blank" className="read-more">
            Read full story
          </a>
        </div>
        <div className="carousel-image">
          <img src={image} alt="Company case study" />
        </div>
      </div>

      <div className="carousel-buttons">
        <button className="carousel-btn prev" onClick={prevStory}>
          <FaArrowCircleLeft />
        </button>
        <div className="carousel-pagination">
          {stories.map((_, index) => (
            <span
              key={index}
              className={`carousel-dot ${
                index === currentIndex ? "active" : ""
              }`}
            ></span>
          ))}
        </div>
        <button className="carousel-btn next" onClick={nextStory}>
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Stories;

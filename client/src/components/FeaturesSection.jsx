import React, { useState } from "react";
import "../styles/FeaturesSection.css";

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "Hands-on training",
      description:
        "Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.",
      image:
        "https://cms-images.udemycdn.com/96883mtakkm8/7kN9RBFSMFNHzsGWsElMPi/dde73f8d1c47e046f035274e78410590/hands-on-practice.png",
      panelImage:
        "https://cms-images.udemycdn.com/96883mtakkm8/4kbyXne3Slx9Sfz4nTBqdf/8ac2b75db1a118f15e2fb5dfe2bb4567/desktop-hands-on-learning-2x.png",
      alt: "sketch of hand working with shapes",
      link: "",
    },
    {
      id: 1,
      title: "Certification prep",
      description:
        "Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.",
      image:
        "https://cms-images.udemycdn.com/96883mtakkm8/2Xh9YHJustDwCEjn5IlO25/93e9b15c6e74876db0dec63466fcc5a0/certificate.png",
      panelImage:
        "https://cms-images.udemycdn.com/96883mtakkm8/GUVYFTj0uwEQuJha5j7TZ/133c991fb3b3f1f93a3e842f4baa7f44/desktop-certification-prep-2x.png",
      alt: "sketch of a certificate",
      link: "https://www.udemy.com/browse/certification/",
    },
    {
      id: 2,
      title: "Insights and analytics",
      description:
        "Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.",
      image:
        "https://cms-images.udemycdn.com/96883mtakkm8/6w8plrr7vY9rIY46UuX0q5/2f0a3f0c22e99bd2d430b998c81321f2/empty-state-1.png",
      panelImage:
        "https://cms-images.udemycdn.com/96883mtakkm8/6q4N9BvIQusFoheoALJhGj/678c1a0bb6c2a22d95461d409492231e/desktop-insights-and-analytics-2x.png",
      alt: "sketch of a graph trending upwards",
      link: "https://business.udemy.com/analytics/",
    },
    {
      id: 3,
      title: "Customizable content",
      description:
        "Create tailored learning paths for team and organization goals and even host your own content and resources.",
      image:
        "https://cms-images.udemycdn.com/96883mtakkm8/2tKGBrb1N60wox2Lh8j3tz/7f1528c9f88ea47bd6ebb46f345902c3/organizations-2.png",
      panelImage:
        "https://cms-images.udemycdn.com/96883mtakkm8/385IhnON960Wvz50ooWIN3/d4e6738c97769258d387b3d609edaad4/desktop-customizable-2x.png",
      alt: "sketch of people forming web of connectivity",
      link: "https://business.udemy.com/user-management/",
    },
  ];

  return (
    <section className="features-section">
      <h2 className="features-title">Learning focused on your goals</h2>
      <div className="features-container">
        <div
          className="features-tabs"
          role="tablist"
          aria-orientation="vertical"
        >
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`feature-tab ${
                activeFeature === index ? "active" : ""
              }`}
              role="tab"
              tabIndex={0}
              aria-selected={activeFeature === index}
              onClick={() => setActiveFeature(index)}
            >
              <img
                src={feature.image}
                alt={feature.alt}
                className="feature-icon"
              />
              <div className="feature-info">
                <p className="feature-title">{feature.title}</p>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="features-panel">
          <img
            src={features[activeFeature].panelImage}
            alt={`Panel image for ${features[activeFeature].title}`}
            className="features-panel-image"
          />
          {features[activeFeature].link && (
            <a
              href={features[activeFeature].link}
              className="feature-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more about {features[activeFeature].title}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

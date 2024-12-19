import React from "react";
import "../styles/LandingPage.css";
import NavBar from "../components/NavBar";
import img from "../images/bitmoji.png";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="box">
        <div className="welcomeBox">
          <img src={img} alt="" className="img" />
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
    </>
  );
};

export default LandingPage;

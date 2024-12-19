import React from "react";
import "../styles/NavBar.css";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";
import { FaCartShopping } from "react-icons/fa6";

const NavBar = () => {
  const nav = useNavigate();

  const handleSignUp = () => {
    nav("/signup");
  };
  const handleLogIn = () => {
    nav("/logIn");
  };

  return (
    <>
      <header>
        <h1>ZDEMY</h1>
        <div className="categoriesContainer">
          <button className="categories">Categories</button>
          <div className="dropdown">
            <ul>
              <li>Category 1xsgxtmrdftujgf</li>
              <li>Category 2</li>
              <li>Category 3</li>
              <li>Category 4</li>
              <li>Category 5</li>
              <li>Category 6</li>
              <li>Category 7</li>
              <li>Category 8</li>
            </ul>
          </div>
        </div>
        <div className="searchBar">
          <div>{<CiSearch />}</div>
          <input
            className="input"
            type="text"
            placeholder="search for what you need!!"
          />
        </div>
        <div className="categoriesContainer">
          <button className="categories">Teach on ZDEMY </button>
          <div className="dropdown">
            <p>
              Turn what you know into an opportunity and reach millions around
              the world.
            </p>
            <button className="learnMoreBtn">LEARN MORE</button>
          </div>
        </div>
        <div className="categoriesContainer">
          <button className="categories">ZDEMY Business</button>
          <div className="dropdown">
            <p>
              Get your team access to over 27,000 top Udemy courses, anytime,
              anywhere.
            </p>
            <button className="learnMoreBtn">Try ZDEMY Business</button>
          </div>
        </div>
        <p>
          <FaCartShopping />
        </p>
        <button className="login" onClick={handleLogIn}>
          LOG IN
        </button>
        <button className="signup" onClick={handleSignUp}>
          SIGN UP
        </button>
      </header>
    </>
  );
};

export default NavBar;

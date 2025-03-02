import React from "react";
import "../styles/NavBar.css";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";
import { FaCartShopping } from "react-icons/fa6";
import useZust from "../../state";

const NavBar = () => {
  const nav = useNavigate();
  const user_localStorage = localStorage.getItem("userData");
  const { user, removeUserData } = useZust((state) => state);
  console.log("user: ", user);
  const handleSignUp = () => {
    nav("/signup");
  };
  const handleLogIn = () => {
    nav("/logIn");
  };

  const handleLogOut = () => {
    removeUserData();
    console.log("user: ", user);
    localStorage.removeItem("userData");
    nav("/login");
  };

  return (
    <>
      <header>
        <h1>ZDEMY</h1>
        <div className="categoriesContainer">
          <button className="categories">Categories</button>
          <div className="dropdown">
            <ul>
              <li>Browse certificates</li>
              <li>Development</li>
              <li>Finanace</li>
              <li>Accounting</li>
              <li>IT</li>
              <li>lifeStyle</li>
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
        {}
        {name}
        {user_localStorage?.email || user?.email ? (
          <button className="login" onClick={handleLogOut}>
            LOG OUT
          </button>
        ) : (
          <>
            <button className="login" onClick={handleLogIn}>
              LOG IN
            </button>
            <button className="signup" onClick={handleSignUp}>
              SIGN UP
            </button>
          </>
        )}
      </header>
    </>
  );
};

export default NavBar;

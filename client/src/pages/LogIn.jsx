import React from "react";
import "../styles/LogIn.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import useStore from "../../state";
import { BASE_URL } from "../../constants";

const LogIn = () => {
  const defaultItem = {
    name: "",
    email: "",
    password: "",
  };

  const [userInfo, setUserInfo] = useState(defaultItem);
  const nav = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedObject = { ...userInfo, [name]: value };
    setUserInfo(updatedObject);
  };

  const { saveUserData } = useStore((state) => state);

  const handleSubmit = async () => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();
    console.log(data);

    // or !data.success
    if (data.success === false) {
      alert(data.message);
      return;
    }

    alert(data.message);
    localStorage.setItem("userData", JSON.stringify(data.userData));
    saveUserData(data.userData);
    nav("/");

    // if (data.success === true) { // true or false
    // if (data.success) { // true or false
    //   alert(data.message);
    //   localStorage.setItem("userData", JSON.stringify(data.userData));
    //   nav("/");
    // } else {
    //   alert(data.message);
    // }
  };

  return (
    <div className="box">
      <div className="logInBox">
        <h2>Log In to Your Account</h2>

        <div className="inputs">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            className="email"
            type="email"
            name="email"
            value={userInfo.email}
            required
          />
        </div>

        <div className="inputs">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            className="password"
            type="password"
            name="password"
            value={userInfo.password}
            required
          />
        </div>

        <div className="forgotPassword">
          <a href="/forgot-password">Forgot your password?</a>
        </div>

        <button type="submit" className="submitBtn" onClick={handleSubmit}>
          Log In
        </button>

        <div className="redirect">
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

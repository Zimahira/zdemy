import React from "react";
import "../styles/LogIn.css";
import { useState } from "react";

const LogIn = () => {
  const defultItem = {
    email: "",
    password: "",
  };

  const [userInfo, setUserInfo] = useState(defultItem);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedObject = { ...userInfo, [name]: value };
    setUserInfo(updatedObject);
  };

  const handleSubmit = async () => {
    console.log(JSON.stringify(userInfo));

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();
    console.log("data: ", data);

    // if (data == 'user found') {
    //   nav("/");
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

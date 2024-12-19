import React from "react";
import "../styles/SignUp.css";

const SignUp = () => {
  return (
    <div className="box">
      <div className="signUpBox">
        <h2>Create an Account</h2>

        <div className="inputs">
          <label htmlFor="username">Username</label>
          <input className="username" type="text" required />
        </div>

        <div className="inputs">
          <label htmlFor="email">Email</label>
          <input className="email" type="email" required />
        </div>

        <div className="inputs">
          <label htmlFor="password">Password</label>
          <input className="password" type="password" required />
        </div>

        <div className="inputs">
          <label htmlFor="cpassword">Confirm Password</label>
          <input className="cpassword" type="password" required />
        </div>

        <div className="termsContainer">
          <input className="terms" type="checkbox" />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>

        <button type="submit" className="submitBtn">
          Sign Up
        </button>

        <div className="redirect">
          <p>
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

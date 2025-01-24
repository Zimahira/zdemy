import React, { useState } from "react";
import "../styles/SignUp.css";
import { BASE_URL } from "../../constants";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSignUp = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: username, email, password }),
      });

      const data = await response.json();

      if (!data.success) {
        alert(data.message);
        return;
      }

      alert("Account created successfully!");
      window.location.href = "/login";
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("Failed to connect to the server. Please try again.");
    }
  };

  return (
    <div className="box">
      <div className="signUpBox">
        <h2>Create an Account</h2>

        <div className="inputs">
          <label htmlFor="username">Username</label>
          <input
            className="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="inputs">
          <label htmlFor="email">Email</label>
          <input
            className="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="inputs">
          <label htmlFor="password">Password</label>
          <input
            className="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="inputs">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            className="cpassword"
            type="password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            required
          />
        </div>

        <div className="termsContainer">
          <input
            className="terms"
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>

        <button type="button" className="submitBtn" onClick={handleSignUp}>
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

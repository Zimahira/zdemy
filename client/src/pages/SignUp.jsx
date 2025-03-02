import React, { useState } from "react";
import "../styles/SignUp.css";
import { BASE_URL } from "../../constants";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
    role: "user",
    adminPasscode: "",
  });

  const [terms, setTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = async () => {
    const { username, email, password, cpassword, role, adminPasscode } =
      formData;

    if (!username || !email || !password || !cpassword) {
      alert("All fields are required.");
      return;
    }

    if (password !== cpassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!terms) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    const payload = {
      name: username,
      email,
      password,
      role,
    };

    if (role === "admin") {
      payload.adminPasscode = adminPasscode;
    }

    try {
      const response = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="inputs">
          <label htmlFor="email">Email</label>
          <input
            className="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="inputs">
          <label htmlFor="password">Password</label>
          <input
            className="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="inputs">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            className="cpassword"
            type="password"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="inputs">
          <label htmlFor="role">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="role"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {formData.role === "admin" && (
          <div className="inputs">
            <label htmlFor="adminPasscode">Admin Passcode</label>
            <input
              className="adminPasscode"
              type="password"
              name="adminPasscode"
              value={formData.adminPasscode}
              onChange={handleChange}
              required
            />
          </div>
        )}

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
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import useZust from "../../state";
import "../styles/LogIn.css";
import { BASE_URL } from "../../constants";

const defaultItem = {
  email: "",
  password: "",
  role: "user",
  adminPasscode: "",
};

const LogIn = () => {
  const nav = useNavigate();
  const [userInfo, setUserInfo] = useState(defaultItem);
  const { saveUserData } = useZust((state) => state);

  const { isLoading, isError, isSuccess, data, mutate } = useMutation({
    mutationFn: async () => {
      const res = await axios.post(`${BASE_URL}/auth/login`, userInfo);
      return res.data;
    },
  });

  useEffect(() => {
    if (isSuccess && data?.success) {
      alert(data.message);
      localStorage.setItem("userData", JSON.stringify(data.userData));
      saveUserData(data.userData);
      nav("/");
    } else if (isError || (data && !data.success)) {
      alert(data?.message || "Login failed");
    }
  }, [isLoading, isError, isSuccess, data, nav, saveUserData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    mutate();
  };

  return (
    <div className="box">
      <div className="logInBox">
        <h2>Log In to Your Account</h2>
        <form onSubmit={handleSubmit}>
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

          <div className="inputs">
            <label htmlFor="role">Login as</label>
            <select
              name="role"
              value={userInfo.role}
              onChange={handleChange}
              className="role"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {userInfo.role === "admin" && (
            <div className="inputs">
              <label htmlFor="adminPasscode">Admin Passcode</label>
              <input
                onChange={handleChange}
                className="adminPasscode"
                type="password"
                name="adminPasscode"
                value={userInfo.adminPasscode}
                required
              />
            </div>
          )}

          <div className="forgotPassword">
            <a href="/forgot-password">Forgot your password?</a>
          </div>

          <button type="submit" className="submitBtn" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log In"}
          </button>

          <div className="redirect">
            <p>
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

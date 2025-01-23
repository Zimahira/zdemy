import React, { useEffect } from "react";
import "../styles/LogIn.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import useStore from "../../state";
import { BASE_URL } from "../../constants";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const defaultItem = {
  name: "",
  email: "",
  password: "",
};

const LogIn = () => {
  const nav = useNavigate();
  const [userInfo, setUserInfo] = useState(defaultItem);
  const { saveUserData } = useStore((state) => state);

  const { isPending, isError, isSuccess, data, mutate } = useMutation({
    mutationFn: async () => {
      const res = await axios.post(`${BASE_URL}/auth/login`, userInfo);
      return res.data;
    },
  });

  useEffect(() => {
    if (isSuccess && data.success === true) {
      alert(data.message);
      localStorage.setItem("userData", JSON.stringify(data.userData));
      saveUserData(data.userData);
      // nav("/");
    }

    if (isError || data.success === false) {
      alert(data.message);
    }
  }, [isPending, isError, isSuccess, data]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedObject = { ...userInfo, [name]: value };
    setUserInfo(updatedObject);
  };

  const handleSubmit = async () => {
    mutate(userInfo);
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

// react
// react-query
// redux/zustand
// tailwind
// typescript

// {isLoading, isSuccess, isError } = useQuery() / useMutation()

// GET -> useQuery
// POST -> useMutation

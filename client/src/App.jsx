import { Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import AllCourses from "./components/AllCourses";
import AllCoursesById from "./components/AllCoursesById";
import PurchasedCourses from "./pages/PurchasedCourses";
import Comment from "./pages/Comment";

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="logIn" element={<LogIn />} />
      <Route path="courses" element={<AllCourses />} />
      <Route path="courses/:courseId" element={<AllCoursesById />} />
      <Route path="purchasedCourses/:userId" element={<PurchasedCourses />} />
      <Route path="comment" element={<Comment />} />
    </Routes>
  );
}

export default App;

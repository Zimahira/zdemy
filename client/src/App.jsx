import { Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Course from "./pages/Course";
import AllCourses from "./components/AllCourses";
import Comment from "./pages/comment";
import AllCoursesById from "./components/AllCoursesById";

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="app" element={<App />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="logIn" element={<LogIn />} />
      <Route path="courses" element={<Course />} />
      <Route path="allCourses/">
        <Route index element={<AllCourses />} />
        <Route path=":courseId" element={<AllCoursesById />} />
      </Route>

      <Route path="comment" element={<Comment />} />
    </Routes>
  );
}

export default App;

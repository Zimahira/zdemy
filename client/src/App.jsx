import { Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="app" element={<App />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="logIn" element={<LogIn />} />
    </Routes>
  );
}

export default App;

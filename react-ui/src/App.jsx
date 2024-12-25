import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./components/Homepage/HomePage.jsx";
import LogIn from "./components/login.jsx";
import NavBar from "./components/NavBar.jsx";
import SignUp from "./components/signup.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div
        className="flex flex-col bg-gradient-to-r from-purple-50 via-gray-50 to-purple-50 justify-between"
        style={{ minHeight: "100vh" }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

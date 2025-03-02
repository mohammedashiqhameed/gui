import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About";
import Chatbot from "./components/Chatbot";
import Navbarr from "./components/Navbarr"; // Home page navbar
import Navbar from "./components/Navbar";   // General navbar
import Home from "./components/Home";
import Blog from "./components/Blog";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === "/"; // Check if it's the home page

  return (
    <>
      {isHome ? <Navbar /> : <Navbarr />} 
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


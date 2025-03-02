import React from "react";
import Navbar from "./Navbar";
import "./Home.css"; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>AI Chatbot Solutions</h1>
          <p>Enhance your business with 24/7 automated support</p>
          <button className="hero-button">TRY OUR CHATBOT</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-card">
          <h3>AI-Powered</h3>
          <p>Advanced AI for natural conversations</p>
        </div>
        <div className="feature-card">
          <h3>24/7 Available</h3>
          <p>Round-the-clock support</p>
        </div>
        <div className="feature-card">
          <h3>Analytics</h3>
          <p>Detailed insights and metrics</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

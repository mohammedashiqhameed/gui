import React from "react";
import "./Team.css"; // Import CSS file
import Navbarr from "./Navbarr";

const Team = () => {
  return (
    <div className="team-container">
      <h2 className="mission-title">Our Mission</h2>
      <p className="mission-text">
        Revolutionizing customer service through innovative AI solutions.
      </p>
      <h3 className="team-title">Meet <span>Our Team</span></h3>
      <div className="team-grid">
        <div className="team-card">
          <strong>Mohammed Ashiq Hameed</strong>
          <p>Team Lead</p>
        </div>
        <div className="team-card">
          <strong>Mohammad Nihal Ashraf</strong>
          <p>Developer</p>
        </div>
        <div className="team-card">
          <strong>Prerana Shetty</strong>
          <p>Developer</p>
        </div>
        <div className="team-card">
          <strong>Vinayak Nagaraj Naik</strong>
          <p>Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Team;

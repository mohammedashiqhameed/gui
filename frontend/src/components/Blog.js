import React from "react";
import Navbarr from "./Navbarr";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Latest Blog Posts</h1>

      <div className="blog-section">
        <div className="blog-block">
          <h2>Latest AI Developments</h2>
          <h6>Jan 15,2024</h6>
          <button className="read-more">Read More</button>
        </div>

        <div className="blog-block">
          <h2>Chatbot Guide</h2>
          <h6>jan 10,2024</h6>
          <button className="read-more">Read More</button>
        </div>

        <div className="blog-block">
          <h2>Future Of Service</h2>
          <h6>jan 5,2024</h6>
          <button className="read-more">Read More</button>
        </div>
      </div> 
    </div>
  );
};

export default Blog;
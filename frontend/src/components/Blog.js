import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/blogs/")
      .then(response => setBlogs(response.data))
      .catch(error => console.error("Error fetching blogs:", error));
  }, []);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return;

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/blogs/", {
        title,
        content,
        like: 0  
      });

      setBlogs([...blogs, response.data]);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">Latest Blog Posts</h1>

     
      <form onSubmit={handleSubmit} className="blog-form">
        <input 
          type="text" 
          placeholder="Blog Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          placeholder="Blog Content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        ></textarea>
        <button type="submit">Add Blog</button>
      </form>

      
      <div className="blog-section">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-block">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <small>{new Date(blog.created_at).toLocaleDateString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

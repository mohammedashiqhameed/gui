import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css"; // Import CSS file for styling

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setIsAuthenticated(false); // Update state
    navigate("/signin"); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">AI Chatbot</h1>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-item">HOME</Link>
          </li>
          <li>
            <Link to="/blog" className="nav-item">BLOG</Link>
          </li>
          <li>
            <Link to="/chatbot" className="nav-item">CHATBOT</Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">ABOUT US</Link>
          </li>
          {isAuthenticated ? (
            <li>
              <button onClick={handleLogout} className="nav-item auth-link logout-btn">
                LOGOUT
              </button>
            </li>
          ) : (
            <li>
              <Link to="/signin" className="nav-item auth-link">SIGN IN</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

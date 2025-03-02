import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS file for styling

const Navbarr = () => {
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
          {/* <li>
            <Link to="/signin" className="nav-item auth-link">SIGN IN</Link>
          </li> */}
          {/* <li>
            <Link to="/signup" className="nav-item auth-link">SIGN UP</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbarr;

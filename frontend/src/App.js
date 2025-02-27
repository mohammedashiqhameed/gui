import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About"
import Chatbot from "./components/Chatbot"
import './index.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
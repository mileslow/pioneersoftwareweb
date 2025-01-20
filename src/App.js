import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PioneerLogo from "./images/PioneerLogo.png";
import Clients from "./pages/Clients";
import { useState, useEffect } from "react";

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1000); // Start sooner to match with main content fade

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper">
      <div className="logoWrapper">
        <img className="pLogo" src={PioneerLogo} alt="Pioneer Logo" />
      </div>
      <div className="TextWrap">
        <h1>
          Pioneer Software<span className="dot">.</span>
        </h1>
        <p>Where your business meets the future</p>
      </div>
      <div className="contact-button-wrapper">
        {showButton && (
          <>
            <div className="laser-outline" />
            <button className="contact-button">Contact Us</button>
          </>
        )}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <nav className="navigation">
        <Link to="/" className="nav-logo">
          <img src={PioneerLogo} alt="Pioneer Logo" className="nav-logo-img" />
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/clients">Clients</Link>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </Router>
  );
}

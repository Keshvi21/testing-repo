import React, { useState } from "react";
import "../styles/Home.css";
import LeftPanel from "../images/leftPanel.svg";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [url, setUrl] = useState("");
  const [standard, setStandard] = useState("WCAG 2.1 & 2.2"); // Updated to match screenshot

  const navigate = useNavigate();


  const handleScan = () => {
    if (!url) {
      alert("Please enter website URL");
      return;
    }
    // API integration later
    console.log("Website URL:", url);
    console.log("Selected Standard:", standard);
     navigate("/loader", {
    state: {
      url,
      standard,
    },
  });
  };

  return (
    <div className="home-container">
      {/* Header with Logo */}
      

      <main className="home-main">
        {/* Left side - Example result cards */}
        <div className="results-preview">
         <img src={LeftPanel} />
        </div>

        {/* Right side - Main content */}
        <div className="main-content">
            <header className="home-header">
        <div className="logo">
          {/* Replace with your actual SVG/logo */}
          <div className="logo-placeholder" />
          <div className="logo-text">
            <h1>SKYNET TECHNOLOGIES</h1>
            <p>Accessibility Checker</p>
          </div>
        </div>
        <div className="lang-selector">
          <span>En ▼</span>
        </div>
      </header>
          <h2>Our free ADA and WCAG compliance checker identifies web accessibility issues</h2>

          <div className="scan-form">
            <div className="input-wrapper">
              <span className="globe-icon">🌐</span>
              <input
                type="text"
                placeholder="Enter website URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>

            <select
              value={standard}
              onChange={(e) => setStandard(e.target.value)}
            >
              <option>WCAG 2.0, 2.1 & 2.2</option>
              {/* Add more if needed */}
            </select>

            <button onClick={handleScan}>Start Scan</button>
          </div>
          <footer className="home-footer">
        <span>Privacy Policy</span>
        <span>•</span>
        <span>Terms & Conditions</span>
        <span className="copyright">Copyright © Skynettechnologies.com</span>
      </footer>
        </div>
      </main>

      
    </div>
  );
};

export default Home;
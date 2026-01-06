import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Loader.css";

const Loader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { url, standard } = location.state || {};

  useEffect(() => {
  const timer = setTimeout(() => {
    navigate("/result", {
      state: {
        url,
        standard,
      },
    });
  }, 3000);

  return () => clearTimeout(timer);
}, [navigate, url, standard]);


  return (
    <div className="loader-container">
      <div className="loader-card">
        <div className="spinner"></div>
        <h2>Scanning Website</h2>
        <p>{url}</p>    
        <span>Please wait while we check accessibility issues...</span>
      </div>
    </div>
  );
};

export default Loader;

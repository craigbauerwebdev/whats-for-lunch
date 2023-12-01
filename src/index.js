import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import ReactGA from "react-ga4";

// ReactGA.initialize( GA_MEASUREMENT_ID: "G-TLPCXK2YK4")

// Refactors
// 1. Render Calendar Programatically
// 2. Auto Detect Weekends



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




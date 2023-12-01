import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./components/Calendar/Calendar";
import Takeout from "./components/Takeout";
// import Email from "./components/Email";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/takeout" element={<Takeout />} />
        <Route path="/calendar" element={<Calendar />} />
        {/* <Route path="/contact" element={<Email />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

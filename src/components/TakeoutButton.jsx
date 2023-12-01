import React from "react";
import Takeout from "../components/Takeout";
import BagIcon from "../images/food_delivery_icon.png";
import { Link } from "react-router-dom";

const TakeoutButton = () => {
  return (
    <div className="button-container">
      <button className="home-buttons takeout-button">
        <Link
          className="but-link"
          to="takeout"
          rel="noreferrer"
          element={<Takeout />}
        >
          {/* <img className="bag-icon" src={BagIcon} alt="take out icon" /> */}
          <span className="text-on-button">TAKEOUT NEARBY</span>
        </Link>
      </button>
    </div>
  );
};

export default TakeoutButton;

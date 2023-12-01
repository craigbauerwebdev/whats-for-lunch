import React from "react";
import Takeout from "../components/Takeout";
import BagIcon from "../images/food_delivery_icon.png";
import CalIcon from "../images/calendar_icon.png";
import { Link } from 'react-router-dom';
import Calendar from "./Calendar/Calendar";
import { getCurrentMonth } from "./utils/getCalendarInfo";


const CalButton = () => {
  const currentMonthIndex = new Date().getMonth();
  return (
    <div className="button-container">
    <button className="cal-button home-buttons">
       <Link className="but-link" to="calendar" rel="noreferrer" element = {<Calendar />}>
          {/* <img className="calendar-icon" src={CalIcon} alt="calendar icon" /> */}
          <span className="text-on-button">
            {getCurrentMonth(currentMonthIndex).toUpperCase()}
            {" "}
            LUNCHES
          </span>
       </Link>
      </button>
      </div>
  );
}

export default CalButton;

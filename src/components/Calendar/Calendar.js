import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getCurrentMonth, getColumnHeaders, getDayByIndex } from "../utils/getCalendarInfo";
import Home from "../Home";
import { Link } from "react-router-dom";
import { showAlerts } from "../../services/Meals";
import "./calendar.scss";

const Calendar = () => {
  const [blankSpaces, setBlankSpaces] = useState([]);
  const [calendarDays, setCalendarDays] = useState([]);
  // Constants
  const currentDate = new Date().getDate();
  const currentMonthIndex = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  //const weekDayIndex = new Date().getDay();
  const startDayIndex = new Date(new Date().setDate(1)).getDay(); //index of day of the week of 1st of Month
  const lastDayOfMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate();

  useEffect(() => {
      // create array of blank spaces at begining of calendar
      setBlankSpaces(new Array(startDayIndex).fill(""));
      // Create an array with all days of the month
      const daysArr = Array.from({length: lastDayOfMonth}, (_, i) => i + 1);
      // Create Calendar Array For Rendering
      const calendarArr = daysArr.map( date => {
        return {
          date,
          day: new Date(new Date().setDate(date)).getDay(),
        }
      });
      // Set the state with calendar json
      setCalendarDays(calendarArr);
  }, [startDayIndex, lastDayOfMonth]);

  if (
    !blankSpaces.length || !calendarDays.length
  ) {
    return null;
  }

  const handleDateClick = (day) => {
    if(showAlerts[day.date]) {
      Swal.fire(showAlerts[day.date]);
    } else {
      Swal.fire({title: "Error", footer: "Let Kim know this is broken"});
    }
  }

  const renderCalendar = (data) => {
    const arr = data.map((day, i) => {
      if(day.day === 0 || day.day === 6) {
        return <div key={`${day}-${i}`} className={`day weekend ${currentDate === day.date ? "red" : "black"}`}>{day.date}</div>
      } else {
        return <div key={`${day}-${i}`} className={`day weekday ${currentDate === day.date ? "red" : "black"}`} onClick={() => {handleDateClick(day)}}>{day.date}</div>
      }
    });
    return arr;
  }

  return (
    <>
      <Link to="/" rel="noreferrer" className="close-x" element={<Home />}>
        <div className="char-x">X</div>
      </Link>
      <div className="calendar">
        <header>
          <h2>{getCurrentMonth(currentMonthIndex)} {currentYear}</h2>
        </header>
        <section>
          {getColumnHeaders().map((header, i) => {
            return <div key={`${header}-${i}`} className="day">{header}</div> 
          })}
        </section>
        <section>
          {blankSpaces.map((space, i) => {
            return <div key={`${space}-${i}`} className="day">{space}</div> 
          })}
          {renderCalendar(calendarDays)}
        </section>
      </div>
    </>
  );
}

export default Calendar;

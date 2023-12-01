import React from "react";
import Swal from "sweetalert2";
import Header from "../Header";
import Home from "../Home";
import { Link } from "react-router-dom";
import { showAlerts } from "../../services/Meals.js";

function Calendar() {
  const today = new Date();
  const date = new Date().getDate();
  console.log(today.getDay());
  // const dateNum = new Date().getDate();

  // make a weeked array

  return (
    <>
      {/* <Header /> */}
      <Link to="/" rel="noreferrer" className="close-x" element={<Home />}>
        <div className="char-x">X</div>
      </Link>
      <div id="wrapOverall">
        <div id="calendar">
          <table>
            <div id="month">
              <th className="month">NOVEMBER</th>
            </div>

            <div id="weeks">
              <tr className="weeks">
                <td>SUN</td>
                <td>MON</td>
                <td>TUE</td>
                <td>WED</td>
                <td>THU</td>
                <td>FRI</td>
                <td>SAT</td>
              </tr>
            </div>

            <div id="days">
              <tr className="week1 week">
                <td></td>
                <td></td>
                <td></td>
                <td
                  onClick={() => Swal.fire(showAlerts[1])}
                  className={`days hover-day ${date === 1 ? "red" : "black"}`}
                >
                  1
                </td>
                <td
                  onClick={() => Swal.fire(showAlerts[2])}
                  className={`days hover-day ${date === 2 ? "red" : "black"}`}
                >
                  2
                </td>
                <td
                  onClick={() => Swal.fire(showAlerts[3])}
                  className={`days hover-day ${date === 3 ? "red" : "black"}`}
                >
                  3
                </td>
                {/* <td
                  onClick={() => Swal.fire(showAlerts[4])}
                  className={`days hover-day ${date === 4 ? "red" : "black"}`}
                >
                  4
                </td> */}
                {/* <td
                  onClick={() => Swal.fire(showAlerts[5])}
                  className={`days hover-day ${date === 5 ? "red" : "black"}`}
                >
                  5
                </td> */}

                <td className="days grey-day">4</td>
              </tr>
              {/* new week */}
              <tr className="week2 week">
                <td className="days grey-day">5</td>
                <td
                  onClick={() => Swal.fire(showAlerts[6])}
                  className={`days hover-day ${date === 6 ? "red" : "black"}`}
                >
                  6
                </td>
                <td
                  onClick={() => Swal.fire(showAlerts[7])}
                  className={`days hover-day ${date === 7 ? "red" : "black"}`}
                >
                  7
                </td>
                <td
                  onClick={() => Swal.fire(showAlerts[8])}
                  className={`days hover-day ${date === 8 ? "red" : "black"}`}
                >
                  8
                </td>
                <td
                  onClick={() => Swal.fire(showAlerts[9])}
                  className={`days hover-day ${date === 9 ? "red" : "black"}`}
                >
                  9
                </td>
                <td
                  onClick={() => Swal.fire(showAlerts[10])}
                  className={`days hover-day ${date === 10 ? "red" : "black"}`}
                >
                  10
                </td>
                {/* <td
                  onClick={() => Swal.fire(showAlerts[11])}
                  className={`days hover-day ${date === 11 ? "red" : "black"}`}
                >
                  11
                </td> */}
                {/* <td
                  onClick={() => Swal.fire(showAlerts[12])}
                  className={`days hover-day ${date === 12 ? "red" : "black"}`}
                >
                  12
                </td> */}
               
                <td className="days grey-day">11</td>
              </tr>
              {/* new week */}
              <tr className="week3 week">
                <td className="days grey-day">12</td>
                <td
                  onClick={() => Swal.fire(showAlerts[13])}
                  className={`days hover-day ${date === 13 ? "red" : "black"}`}
                >
                  13
                </td>
                <td
                  onClick={() => Swal.fire(showAlerts[14])}
                  className={`days hover-day ${date === 14 ? "red" : "black"}`}
                >
                  14
                </td>
                <td
                  onClick={() => Swal.fire(showAlerts[15])}
                  className={`days hover-day ${date === 15 ? "red" : "black"}`}
                >
                  15
                </td>
                <td
                  onClick={() => Swal.fire(showAlerts[16])}
                  className={`days hover-day ${date === 16 ? "red" : "black"}`}
                >
                  16
                </td>
                <td
                  onClick={() => Swal.fire(showAlerts[17])}
                  className={`days hover-day ${date === 17 ? "red" : "black"}`}
                >
                  17
                </td>
                <td className="days grey-day">18</td>
              </tr>
              {/* new week */}
              <tr className="week4 week">
                <td className="days grey-day">19</td>
                <td
                  onClick={() => Swal.fire(showAlerts[20])}
                  className={`days hover-day ${date === 20 ? "red" : "black"}`}
                >
                  20
                </td>
                <td
                  onClick={() => Swal.fire(showAlerts[21])}
                  className={`days hover-day ${date === 21 ? "red" : "black"}`}
                >
                  21
                </td>
                <td
                  onClick={() => Swal.fire(showAlerts[22])}
                  className={`days hover-day ${date === 22 ? "red" : "black"}`}
                >
                  22
                </td>
                <td
                  onClick={() => Swal.fire(showAlerts[23])}
                  className={`days hover-day ${date === 23 ? "red" : "black"}`}
                >
                  23
                </td>
                <td
                  onClick={() => Swal.fire(showAlerts[24])}
                  className={`days hover-day ${date === 24 ? "red" : "black"}`}
                >
                  24
                </td>
                {/* <td
                  onClick={() => Swal.fire(showAlerts[25])}
                  className={`days hover-day ${date === 25 ? "red" : "black"}`}
                >
                  25
                </td> */}
                {/* <td
                  onClick={() => Swal.fire(showAlerts[26])}
                  className={`days hover-day ${date === 26 ? "red" : "black"}`}
                >
                  26
                </td> */}
                <td className="days grey-day">25</td>
              </tr>
              {/* new week */}
              <tr className="week5 week">
                <td className="days grey-day">26</td>
                <td
                  onClick={() => Swal.fire(showAlerts[27])}
                  className={`days hover-day ${date === 27 ? "red" : "black"}`}
                >
                  27
                </td>
                <td
                  onClick={() => Swal.fire(showAlerts[28])}
                  className={`days hover-day ${date === 28 ? "red" : "black"}`}
                >
                  28
                </td>
                <td
                  onClick={() => Swal.fire(showAlerts[29])}
                  className={`days hover-day ${date === 29 ? "red" : "black"}`}
                >
                  29
                </td>
                <td
                  onClick={() => Swal.fire(showAlerts[30])}
                  className={`days hover-day ${date === 30 ? "red" : "black"}`}
                >
                  30
                </td>
                {/* <td
                  onClick={() => Swal.fire(showAlerts[31])}
                  className={`days hover-day ${date === 31 ? "red" : "black"}`}
                >
                  31
                </td> */}
                {/* <td></td> */}
                {/* <td></td> */}
                <td></td>
                <td></td>
              </tr>
            </div>
          </table>
        </div>
      </div>
    </>
  );
}

export default Calendar;

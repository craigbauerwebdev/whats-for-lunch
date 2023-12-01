import React from "react";
import Swal from "sweetalert2";
import { showAlerts } from "../services/Meals.js";

const LunchButton = () => {
  let date = () => new Date().getDate();
  return (
    <div className="button-container">
      <button
        onClick={() => Swal.fire(showAlerts[date()])}
        className="todays-button home-buttons days"
      >
        TODAY'S LUNCH
      </button>
    </div>
  );
};

export default LunchButton;

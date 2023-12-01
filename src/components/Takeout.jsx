import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Header from "./Header";
import HomeShowroom from "./HomeShowroom";
import Chipotle from "../images/chipotle_logo_small.png";
import Blaze from "../images/blaze_logo.png";
import Cava from "../images/cava_logo.png";
import Chopt from "../images/chopt.jpeg";
import Panera from "../images/panera_logo.png";
import Stickies from "../images/stickies_logo.png";
import Uber from "../images/uber_eats.png";
import Home from "./Home";

class Takeout extends Component {
  render() {
    return (
      <div className="takeouts-page">
        {/* <Header /> */}
        <Link to="/" rel="noreferrer" className="close-x" element={<Home />}><div className="char-x">X</div></Link>
        <div className="takeout-container">
          <section className="takeout-joints">
            <Link to="https://chipotle.com/order#menu" rel="noreferrer">
              <img
                className="chipotle-logo resto-logo"
                src={Chipotle}
                alt="Chipotle restaurant icon"
              ></img>
            </Link>
            <Link to="https://www.blazepizza.com/order" rel="noreferrer">
              <img
                className="blaze-logo resto-logo"
                src={Blaze}
                alt="Blaze restaurant icon"
              ></img>
            </Link>
            <Link to="https://cava.com/" rel="noreferrer">
              <img
                className="cava-logo resto-logo"
                src={Cava}
                alt="Cava restaurant icon"
              ></img>
            </Link>
            <Link
              to="https://www.choptsalad.com/order/locations"
              rel="noreferrer"
            >
              <img
                className="chopt-logo resto-logo"
                src={Chopt}
                alt="Chopt restaurant icon"
              ></img>
            </Link>
            <Link
              to="https://www.panerabread.com/en-us/start-an-order.html"
              rel="noreferrer"
            >
              <img
                className="panera-logo resto-logo"
                src={Panera}
                alt="Panera restaurant icon"
              ></img>
            </Link>
            <Link to="https://order.stickys.com/" rel="noreferrer">
              <img
                className="stickies-logo resto-logo"
                src={Stickies}
                alt="Stickies restaurant icon"
              ></img>
            </Link>
          </section>
        </div>
        <section className="big-logos">
          <Link to="https://www.ubereats.com/" rel="noreferrer">
            <img
              className="uber-eats-logo resto-logo resto-logo-big"
              src={Uber}
              alt="Uber Eats icon"
            ></img>
          </Link>
        </section>
        <p className="other-food">Click an icon to order takeout nearby</p>

        {/* <Footer2 /> */}
      </div>
    );
  }
}

export default Takeout;

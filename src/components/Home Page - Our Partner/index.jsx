import React from "react";
import "./style.scss";
import logo1 from "./image/logo1.jpg"
import logo2 from "./image/logo2.jpg"
import logo3 from "./image/logo3.jpg"
import logo4 from "./image/logo4.jpg"
import logo5 from "./image/logo5.jpg"
import logo6 from "./image/logo6.jpg"
const index = () => {
  return (
    <div className="ourPartner">
      <h1>Our Partner</h1>
      <div className="partnerLogo">
        <img src={logo1} alt="#" />
        <img src={logo2} alt="#" />
        <img src={logo3} alt="#" />
        <img src={logo4} alt="#" />
        <img src={logo5} alt="#" />
        <img src={logo6} alt="#" />
      </div>
    </div>
  );
};

export default index;

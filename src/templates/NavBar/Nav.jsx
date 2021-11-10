import React from "react";
import logo from "./logo.png";
import "./navBar.css";
import { useState } from "react";
const Nav = () => {
  const [hamBurg, setHamBurg] = useState(false);
  if (hamBurg==true)  {
    document.body.style.overflow='hidden';
  }
  else{
    document.body.style.overflowY='scroll'
  }
  return (
    <>
      <div className="navBar">
        <img src={logo} alt="" className="hamburger" />
        <h1
          className="hamburger active-color "
          onClick={() => setHamBurg(!hamBurg)}
        >
          <div className="hamCircle">
          {hamBurg ? "🗙" : "☰"}
          </div>
        </h1>
      </div>
      <div className={hamBurg ? "navItems active" : "navItems"}>
        <div className="navContainer">
          <div className="navLeft">
            <div className="navListLeft">
              <div className="list">Home</div>
              <div className="list">News</div>
              <div className="list">Act of kindness</div>
              <div className="list">Civil Rights Movements</div>
              <div className="list">Contact us</div>
              <div className="nav-underline"></div>
              <div className="loginRegister">
                  <div className="login">login</div>
                  <div className="loginRegister-underline"></div>
                  <div className="register">Signup</div>
              </div>
            </div>
          </div>
          <div className="navRight">
            <div className="navListRight">
              <div className="list">About Us</div>
              <div className="list">Cause</div>
              <div className="list">Donate</div>
              <div className="list">Transparency</div>
              <div className="list">Our Voulunteer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

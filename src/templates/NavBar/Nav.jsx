// node modules
import { Link } from 'react-router-dom';
import { useState } from 'react';

// utils
import {
  ABOUT_US,
  ACT_OF_KINDNESS,
  CAUSES,
  CIVIL_RIGHTS_MOMENTS,
  CONTACT_US_PAGE,
  EVENTS,
  HOME_PAGE,
  LOGIN,
  NEWS,
  OUR_VOLUNTEER,
  SIGNUP,
  TRANSPARENCY,
} from '../../Routes/constants';

// statis assets
import logo from './logo.png';
import './navBar.css';
const Nav = () => {
  const [hamBurg, setHamBurg] = useState(false);
  if (hamBurg == true) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflowY = 'scroll';
  }
  return (
    <>
      <div className="navBar">
        <Link to="/">
          <img src={logo} alt="" className="hamburger" />
        </Link>
        <h1
          className="hamburger active-color"
          onClick={() => setHamBurg(!hamBurg)}
        >
          <div className="hamCircle">{hamBurg ? '🗙' : '☰'}</div>
        </h1>
      </div>
      <div className={hamBurg ? 'navItems active' : 'navItems'}>
        <div className="navContainer">
          <div className="navLeft">
            <div className="navListLeft">
              <div className="list">
                <Link to={HOME_PAGE}>Home</Link>
              </div>
              <div className="list">
                <Link to={NEWS}>News</Link>
              </div>
              <div className="list">
                <Link to={ACT_OF_KINDNESS}>Act of Kindness</Link>
              </div>
              <div className="list">
                <Link to={CIVIL_RIGHTS_MOMENTS}>Civil Rights Moments</Link>
              </div>
              <div className="list">
                <Link to={CONTACT_US_PAGE}>Contact us</Link>
              </div>
              <div className="nav-underline"></div>
              <div className="loginRegister">
                <div className="login">
                  <Link to={LOGIN}>Login</Link>
                </div>
                <div className="loginRegister-underline"></div>
                <div className="register">
                  <Link to={SIGNUP}>Signup</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="navRight">
            <div className="navListRight">
              <div className="list">
                <Link to={ABOUT_US}>About us</Link>
              </div>
              <div className="list">
                <Link to={CAUSES}>Cause</Link>
              </div>
              <div className="list">
                <Link to={EVENTS}>Events</Link>
              </div>
              <div className="list">
                <Link to={TRANSPARENCY}>Transparency</Link>
              </div>
              <div className="list">
                <Link to={OUR_VOLUNTEER}>Our Volunteer</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

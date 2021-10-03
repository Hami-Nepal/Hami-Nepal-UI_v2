import React from "react";
import "./style.scss";
import MobileApp from "./mobileapp.jpg";
import Playstore from "./playstore.png";
import Appstore from "./appstore.png";
const MobileAppComponent = () => {
  return (
    <div className="MobileApp">
      <img src={MobileApp} alt="" className="MobileApp_Image" />
      <div className="MobileApp_Text">
        <h2>Coming Soon</h2>
        <h3>HamiNepal App</h3>
        <p>
          Start and manage fundraisers, engage with <br/>supporters, and discover
          important causes <br/>— all on the go
        </p>
        <div className="AppStore_PlayStore">
          <img src={Playstore} alt="playstore" />
          <img src={Appstore} alt="appstore" />
        </div>
      </div>
    </div>
  );
};

export default MobileAppComponent;

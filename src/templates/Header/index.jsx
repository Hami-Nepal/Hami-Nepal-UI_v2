import { useState } from 'react';

import Hamburgur from '../../components/Hamburgur';

import './header.scss';

import logo from '../../logo.png';

function Header() {
  const [active, setActive] = useState(false);
  const onClickHandler = () => setActive(!active);

  return (
    <div className="Header">
      <img src={logo} alt="website logo" />
      {/* <div className="Header__hamburgurCircle"> */}
      <Hamburgur active={active} onClickHandler={onClickHandler} />
      {/* </div> */}
    </div>
  );
}

export default Header;

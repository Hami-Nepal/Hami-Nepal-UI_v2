import { useState } from 'react';

// import Hamburgur from '../../components/Hamburgur';

import './header.scss';
import NavBar from '../NavBar/Nav'
// import logo from '../../logo.png';

function Header() {
  const [active, setActive] = useState(false);
  const onClickHandler = () => setActive(!active);

  return (
<>
      <NavBar/>
  </>
  );
}

export default Header;

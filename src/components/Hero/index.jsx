import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import dummyVideo from './video.mp4';
import './hero.scss';

const Hero = () => {
  const [isMuted, setMuted] = useState(true);
  const [show, setShow] = useState('false');

  const handleClose = () => setShow(false);

  return (
    <div className="main">
      <video
        className="Home__video"
        src={dummyVideo}
        preload="metadata"
        autoPlay={true}
        muted={isMuted}
        loop="loop"
      />

      <div className="lowerContent">
        <div className="lowerContent__donate">
          <h1 className="slogan">For the people by the people</h1>
          <Button text="Donate" variant="transparent" />
        </div>
        <Link onChange={handleClose} to="/our-work">
          <button className="lowerContent__ourwork">Our Work</button>
        </Link>
      </div>
    </div>
  );
};
export default Hero;

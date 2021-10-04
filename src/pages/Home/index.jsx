import { useState } from 'react';

import Header from '../../templates/Header';

import './home.scss';

import dummyVideo from './video.mp4';

function Home() {
  const [isMuted, setMuted] = useState(true);

  return (
    <div className="Home">
      <Header />
      <video
        className="Home__video"
        src={dummyVideo}
        preload="metadata"
        autoPlay={true}
        muted={isMuted}
        loop="loop"
      ></video>
    </div>
  );
}

export default Home;

import { useState } from 'react';
import HomeAbout from '../../components/HomeAboutUsSection';
import MobileAppComponent from '../../components/MobileApp';
import Footer from '../../components/Footer';
import Header from '../../templates/Header';
import './home.scss';

import dummyVideo from './video.mp4';

function Home() {
  const [isMuted, setMuted] = useState(true);

  return (
    <>
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
    <HomeAbout />
    <MobileAppComponent />
    <Footer/>
    </>
  );
}

export default Home;

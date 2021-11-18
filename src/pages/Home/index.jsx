import News from '../../components/HomeAboutUsSection';
import MobileAppComponent from '../../components/MobileApp';
import Partner from '../../components/Home Page - Our Partner/index';
import Footer from '../../components/Footer';
import Header from '../../templates/Header';
import Hero from '../../components/Hero/index';
import Work from '../../components/Home Page- How We Work/index';
import React from 'react';
import './home.scss';
import HomeTransparency from '../../components/HomeTransparency';
import Borad from '../../components/Board/index';
import HomeActOfKindness from '../../components/HomeActOfKindness';

function Home() {
  return (
    <>
      <div className="Home">
        <Header />
        <Hero />
        <HomeTransparency />
        {/* <News /> */}
        <HomeActOfKindness />
        <Work />
        <Borad />
        <MobileAppComponent />
        <Partner />
        <Footer />
      </div>
    </>
  );
}

export default Home;

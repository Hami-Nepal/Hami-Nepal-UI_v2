import MobileAppComponent from '../../components/MobileApp';
import Footer from '../../components/Footer';
import Header from '../../templates/Header';
import Hero from '../../components/Hero';
import Board from '../../components/Board';
import HomeTransparency from '../../components/HomeTransparency';

import './home.scss';

function Home() {
  return (
    <>
      <div className="Home">
        <Header />
        <Hero />
        <HomeTransparency />
        <Board />
        <MobileAppComponent />
        <Footer />
      </div>
    </>
  );
}

export default Home;

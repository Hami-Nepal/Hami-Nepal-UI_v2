import MobileAppComponent from '../../components/MobileApp';
import Footer from '../../components/Footer';
import Header from '../../templates/Header';
import Hero from '../../components/Hero/index';
import Board from '../../components/Board/index';
import HomeTransparency from '../../components/HomeTransparency';

import Board from '../../components/Board/index';
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

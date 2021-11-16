import HomeAbout from "../../components/HomeAboutUsSection"
import MobileAppComponent from "../../components/MobileApp"
import Footer from "../../components/Footer"
import Header from "../../templates/Header"
import Hero from "../../components/Hero/index"
import React from "react"
import Board from "../../components/Board/index"
import Testimonals from "../../components/Testimonials/index"
import "./home.scss"

function Home() {
  return (
    <>
      <div className="Home">
        <Header />
        <Hero />
        {/* <HomeAbout /> */}
        <Board />
        {/* <Testimonals /> */}
        <MobileAppComponent />
        <Footer />
      </div>
    </>
  )
}

export default Home

import HomeAbout from "../../components/HomeAboutUsSection"
import MobileAppComponent from "../../components/MobileApp"
import Footer from "../../components/Footer"
import Header from "../../templates/Header"
import Hero from "../../components/Hero/hero"
import React from "react"

import "./home.scss"

function Home() {
  return (
    <>
      <div className="Home">
        <Header />
        <Hero />
        <HomeAbout />
        <MobileAppComponent />
        <Footer />
      </div>
    </>
  )
}

export default Home

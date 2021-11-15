import HomeAbout from "../../components/HomeAboutUsSection"
import MobileAppComponent from "../../components/MobileApp"
import Footer from "../../components/Footer"
import Header from "../../templates/Header"
import Hero from "../../components/Hero/index"
import React from "react"

import "./home.scss"
import BoardMembers from "../../components/BoardMembers"

function Home() {
  return (
    <>
      <div className="Home">
        <Header />
        <Hero />
        <HomeAbout />
        <BoardMembers />
        {/* <MobileAppComponent /> */}
        <Footer />
      </div>
    </>
  )
}

export default Home

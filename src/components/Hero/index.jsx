import React, { useState } from "react"
import dummyVideo from "./video.mp4"
import "./hero.scss"
import { Link } from "react-router-dom"

const Hero = () => {
  const [isMuted, setMuted] = useState(true)
  const [show, setShow] = useState("false")

  const handleClose = () => setShow(false)

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

      <div className="slogan">
        <h1>For the people by the people</h1>
        <div className="button">
          <button id="btn_donate">Donate</button>
          <Link onChange={handleClose} to="/our-work">
            <button id="btn_ourwork">Our Work</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Hero

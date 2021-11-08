import React, { useState } from "react"
import dummyVideo from "./video.mp4"
import "./hero.scss"

const Hero = () => {
  const [isMuted, setMuted] = useState(true)

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
          <button id="btn_ourwork">Our Work</button>
        </div>
      </div>
    </div>
  )
}
export default Hero

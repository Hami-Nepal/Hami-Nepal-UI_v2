import React, { useState, useEffect } from "react"
import "./testimonials.scss"
import president from "./photos/president.jpg"
import members from "./data"

const Testimonals = () => {
  const [people, setPeople] = useState(members)
  const [index, setIndex] = React.useState(0)

  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])
  return (
    <>
      <h1>Our Board Members</h1>
      <div className="t-main">
        <i className="left angle icon" onClick={() => setIndex(index - 1)}></i>
        <div className="t-content">
          {members.map((person, personIndex) => {
            const { id, image, name, title, quote } = person
            let position = "nextSlide"
            if (personIndex === index) {
              position = "acticeSlide"
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide"
            }
            return (
              <>
                <div className="t-content">
                  <img className="profile-img" src={image} />
                  <h2>{name}</h2>
                  <h3>{title}</h3>
                  <div className="summary">
                    <i className="quote left icon" />
                    <p>{quote}</p>
                    <i className="quote right icon" />
                    <i />
                  </div>
                  <div className="social-icons">
                    <i className="instagram icon"></i>
                    <i className="facebook icon"></i>
                    <i className="twitter icon"></i>
                    <i className="linkedin icon"></i>
                  </div>
                </div>
              </>
            )
          })}
        </div>
        <i className="right angle icon" onClick={() => setIndex(index + 1)}></i>
      </div>
    </>
  )
}
export default Testimonals

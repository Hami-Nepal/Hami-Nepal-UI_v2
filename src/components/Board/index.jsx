import React, { useState, useEffect } from "react"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import data from "./data"
import "./board.scss"
function Board() {
  const [people, setPeople] = useState(data)
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
    <div className="testimonial">
      <section className="section">
        <div className="title">
          <h2>OUR BOARD MEMBERS</h2>
        </div>
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person

            let position = "nextSlide"
            if (personIndex === index) {
              position = "activeSlide"
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide"
            }

            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <div className="social-icons">
                  <i className="instagram icon"></i>
                  <i className="facebook icon"></i>
                  <i className="twitter icon"></i>
                </div>
              </article>
            )
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft size={"2.5rem"} />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight size={"2.5rem"} />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Board

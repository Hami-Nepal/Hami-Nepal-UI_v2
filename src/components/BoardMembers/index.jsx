import React from "react"
import arrowLeft from "./photos/arrow-left.svg"
import arrowRight from "./photos/arrow-right.svg"
import president from "./photos/president.jpg"
import "./boardmembers.css"
const BoradMembers = () => {
  return (
    <div className="board-main">
      <div>
        <img src={arrowLeft} />
      </div>
      <div className="t-body">
        <h1>Our board members</h1>
        <img className="t-image" src={president} />
        <h3 className="t-name">Sudan Gurung</h3>
        <h5>President</h5>
        <div className="details">
          <i className="quote left icon"></i>
          <p>
            On 25 April, 2015 an earthquake with a magnitudeof 7.8 Richter scale
            struck Nepal along with continued aftershocks occurring throughout
            the nation at the intervals of 15–20 minutes. The earthquake
            affected a huge population of the nation with about 9,000 fatalities
            and nearly 22,000 injured people.All of the hospitals in Kathmandu
            were in chaos and unmanaged with injured people flowing in rapidly.
            The National Trauma Center, a government hospital, was no exception.
            After hearing the Information, several youths went to the trauma
            hospital and offered to volunteer in order to control the situation.
            Our organization founder, Mr. Sudan Gurung, was also one of them.The
            volunteering youths started calling themselves “I to We” at that
            time because of discrete reasons. However, the name was later
            changed into ‘HamiNepal’, which is roughly translated as ‘We for
            Nepal’. It is how people with helping intention came along and
            formed the HamiNepal Youth
          </p>
          <i className="quote right icon"></i>
        </div>
        <div className="social-icon">
          <i style={{ color: "#D52C76" }} className="instagram icon"></i>
          <i style={{ color: "#0A82ED" }} className="facebook icon"></i>
          <i style={{ color: "#1C9CEB" }} className="twitter icon"></i>
          <i style={{ color: "#0073B1" }} className="linkedin icon"></i>
        </div>
      </div>
      <div>
        <img src={arrowRight} />
      </div>
    </div>
  )
}
export default BoradMembers

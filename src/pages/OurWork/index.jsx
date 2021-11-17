import "./ourwork.scss"
import API from "../../utils/API"
import { useEffect, useState } from "react"
import Tab from "../../templates/Tab"

const OurWork = () => {
  const [eventTypes, setEventTypes] = useState([])

  useEffect(async () => {
    const { data: res } = await API.get("event_type")
    const event_types = res.data.Event_type_var.map((obj) => obj.event_type)
    console.log(event_types)
  }, [])

  return (
    <>
      <header className="hero-section">
        <div className="quote_contain container">
          <h1 className="heading__title">Our Work</h1>
          <p className="heading__description">
            Pulling up the roots of poverty and planting the seeds of change.
            Building relationships. Earning the right to be heard. Planning and
            working alongside local leaders. Finding solutions to change the
            future for kids and the next generation. Here's just some of what we
            accomplished together in 2020.
          </p>
        </div>
      </header>
      <Tab types={[]} callBack={() => {}} />
    </>
  )
}
export default OurWork

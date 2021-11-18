import { useEffect, useState } from "react"

import API from "../../utils/API"
import Tab from "../../templates/Tab"

import "./ourwork.scss"

const OurWork = () => {
  const [types, setTypes] = useState([])
  const [activeType, setActiveType] = useState("")
  const [activeStatus, setActiveStatus] = useState("")
  const [list, setList] = useState("")

  // useEffect(() => {
  //   async function causeList() {
  //     const eventList = await API.get(`/events`)
  //     const causeList = await API.get(`/causes`)

  //     console.log(eventList.data.data, causeList.data.data)
  //   }
  //   causeList()
  // }, [])

  useEffect(async () => {
    const promises = [API.get("event_type"), API.get("cause_type")]
    const [event_types, cause_types] = await Promise.all(promises)

    const eventTypesDest = event_types.data.data.Event_type_var.map(
      (obj) => obj.event_type
    )
    const causeTypesDest = cause_types.data.data.Cause_type_var.map(
      (obj) => obj.cause_type
    )

    const mergedTypes = [...new Set([...eventTypesDest, ...causeTypesDest])]
    setTypes(mergedTypes)
    setActiveType(mergedTypes[0])
    setActiveStatus("ongoing")
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
      <h1>you select {list}</h1>
      <Tab
        types={types}
        setActiveStatus={setActiveStatus}
        setActiveType={setActiveType}
      />
    </>
  )
}
export default OurWork

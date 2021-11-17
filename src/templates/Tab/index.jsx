import { useState } from "react"
import "./tab.scss"

const Tab = ({ types, callBack }) => {
  const [activeTab, setActiveTab] = useState(types[0])

  callBack(activeTab)

  return (
    <select className="tab">
      {types.map((type) => (
        <option className="tab-option">{type}</option>
      ))}
    </select>
  )
}
export default Tab

import "./tab.scss"

const Tab = ({ types, setActiveType, setActiveStatus }) => {
  return (
    <div className="tab">
      <select
        className="tab__select"
        onChange={(e) => setActiveStatus(e.target.value)}
      >
        <option className="tab__option" value="ongoing">
          On going
        </option>
        <option className="tab__option" value="past">
          Past
        </option>
      </select>
      <select
        className="tab__select"
        onChange={(e) => setActiveType(e.target.value)}
      >
        {types.map((type) => (
          <option key={type} className="tab__option" value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  )
}
export default Tab

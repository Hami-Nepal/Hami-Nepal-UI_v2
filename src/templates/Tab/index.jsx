import './tab.scss';

const Tab = ({ types, setActiveType, setActiveStatus }) => {
  return (
    <div className="tab">
      <label className="tab__label">
        <p>Type</p>
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
      </label>
      <label className="tab__label">
        <p>Status</p>
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
      </label>
    </div>
  );
};
export default Tab;

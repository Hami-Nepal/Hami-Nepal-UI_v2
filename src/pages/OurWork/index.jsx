import { useEffect, useState } from 'react';

import API from '../../utils/API';
import Tab from '../../templates/Tab';

import './ourwork.scss';

const OurWork = () => {
  const [eventTypes, setEventTypes] = useState([]);
  const [activeEventType, setActiveEventType] = useState('');
  const [activeEventStatus, setActiveEventStatus] = useState('ongoing');

  const [causeTypes, setCauseTypes] = useState([]);
  const [activeCauseType, setActiveCauseType] = useState('');
  const [activeCauseStatus, setActiveCauseStatus] = useState('ongoing');

  useEffect(async () => {
    const promises = [API.get('event_type'), API.get('cause_type')];
    const [event_types, cause_types] = await Promise.all(promises);

    const eventTypesDest = event_types.data.data.Event_type_var.map(
      (obj) => obj.event_type
    );
    setEventTypes(eventTypesDest);
    setActiveEventType(eventTypesDest[0]);

    const causeTypesDest = cause_types.data.data.Cause_type_var.map(
      (obj) => obj.cause_type
    );
    setCauseTypes(causeTypesDest);
    setActiveCauseType(causeTypesDest[0]);
  }, []);

  return (
    <div>
      <div className="ourWorkHero">
        <h1 className="ourWorkHero__heading">Our Work</h1>
        <p className="ourWorkHero__desc">
          Pulling up the roots of poverty and planting the seeds of change.
          Building relationships. Earning the right to be heard. Planning and
          working alongside local leaders. Finding solutions to change the
          future for kids and the next generation. Here's just some of what we
          accomplished together in 2020.
        </p>
      </div>

      <h2>Causes</h2>

      <Tab
        types={eventTypes}
        setActiveStatus={setActiveEventStatus}
        setActiveType={setActiveEventType}
      />
    </div>
  );
};

export default OurWork;

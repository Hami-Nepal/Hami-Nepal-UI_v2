// npm modules
import { useEffect, useState } from 'react';

// utils
import API from '../../utils/API';

// templates or components
import Tab from '../../templates/Tab';
import CauseEventCard from '../../components/CauseEventCard';
import Footer from '../../components/Footer';

// static assets
import './ourwork.scss';

const OurWork = () => {
  const [eventTypes, setEventTypes] = useState([]);
  const [activeEventType, setActiveEventType] = useState('');
  const [activeEventStatus, setActiveEventStatus] = useState('ongoing');
  const [eventCards, setEventCards] = useState([]);

  const [causeTypes, setCauseTypes] = useState([]);
  const [activeCauseType, setActiveCauseType] = useState('');
  const [activeCauseStatus, setActiveCauseStatus] = useState('ongoing');
  const [causeCards, setCauseCards] = useState([]);

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

  useEffect(async () => {
    const { data } = await API.get(
      `events?type=${activeEventType}&status=${activeEventStatus}`
    );
    setEventCards(data.data);
  }, [activeEventType, activeEventStatus]);

  useEffect(async () => {
    const { data } = await API.get(
      `causes?cause_type=${activeCauseType}&status=${activeCauseStatus}`
    );
    setCauseCards(data.data.causes);
  }, [activeCauseType, activeCauseStatus]);

  return (
    <div className="ourWork">
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

      <div className="ourWorkContent">
        <h2>Event</h2>
        <Tab
          types={eventTypes}
          setActiveStatus={setActiveEventStatus}
          setActiveType={setActiveEventType}
        />
        <div className="ourWorkCards">
          {eventCards.length ? (
            eventCards.map((card) => (
              <CauseEventCard
                key={card._id}
                card={card}
                href={`/events/${card._id}`}
              />
            ))
          ) : (
            <h2>No cards</h2>
          )}
        </div>

        <hr className="ourWorkHr" />

        <h2>Causes</h2>
        <Tab
          types={causeTypes}
          setActiveStatus={setActiveCauseStatus}
          setActiveType={setActiveCauseType}
        />
        <div className="ourWorkCards">
          {causeCards.length ? (
            causeCards.map((card) => (
              <CauseEventCard
                key={card._id}
                card={card}
                href={`/events/${card._id}`}
              />
            ))
          ) : (
            <h2>No cards</h2>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurWork;

// npm modules
import { useEffect, useState } from 'react';

// utils
import API from '../../utils/API';

// templates or components
import Tab from '../../templates/Tab';
import CauseEventCard from '../../components/CauseEventCard';
import Footer from '../../components/Footer';
import Header from '../../templates/Header';

// static assets
import './events.scss';

const Events = () => {
  const [eventTypes, setEventTypes] = useState([]);
  const [activeEventType, setActiveEventType] = useState('');
  const [activeEventStatus, setActiveEventStatus] = useState('ongoing');
  const [eventCards, setEventCards] = useState([]);

  useEffect(async () => {
    const event_types = await API.get('event_type');

    const eventTypesDest = event_types.data.data.Event_type_var.map(
      (obj) => obj.event_type
    );
    setEventTypes(eventTypesDest);
    setActiveEventType(eventTypesDest[0]);
  }, []);

  useEffect(async () => {
    const { data } = await API.get(
      `events?type=${activeEventType}&status=${activeEventStatus}`
    );
    setEventCards(data.data);
  }, [activeEventType, activeEventStatus]);

  return (
    <div className="events">
      <Header />

      <div className="eventsHero">
        <h1 className="eventsHero__heading">Events</h1>
        <p className="eventsHero__desc">
          Life's most persistent and urgent question is, what are you doing for
          others?
        </p>
      </div>

      <div className="eventsContent">
        <Tab
          types={eventTypes}
          setActiveStatus={setActiveEventStatus}
          setActiveType={setActiveEventType}
        />
        <div className="eventsCards">
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
      </div>

      <Footer />
    </div>
  );
};

export default Events;

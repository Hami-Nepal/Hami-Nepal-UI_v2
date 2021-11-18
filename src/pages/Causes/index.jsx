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
import './causes.scss';

const Causes = () => {
  const [causeTypes, setCauseTypes] = useState([]);
  const [activeCauseType, setActiveCauseType] = useState('');
  const [activeCauseStatus, setActiveCauseStatus] = useState('ongoing');
  const [causeCards, setCauseCards] = useState([]);

  useEffect(async () => {
    const cause_types = await API.get('cause_type');

    const causeTypesDest = cause_types.data.data.Cause_type_var.map(
      (obj) => obj.cause_type
    );
    setCauseTypes(causeTypesDest);
    setActiveCauseType(causeTypesDest[0]);
  }, []);

  useEffect(async () => {
    const { data } = await API.get(
      `causes?cause_type=${activeCauseType}&status=${activeCauseStatus}`
    );
    setCauseCards(data.data.causes);
  }, [activeCauseType, activeCauseStatus]);

  return (
    <div className="causes">
      <Header />

      <div className="causesHero">
        <h1 className="causesHero__heading">Causes</h1>
        <p className="causesHero__desc">
          Life's most persistent and urgent question is, what are you doing for
          others?
        </p>
      </div>

      <div className="causesContent">
        <Tab
          types={causeTypes}
          setActiveStatus={setActiveCauseStatus}
          setActiveType={setActiveCauseType}
        />
        <div className="causesCards">
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

export default Causes;

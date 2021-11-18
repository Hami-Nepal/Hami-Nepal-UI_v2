import { useEffect, useState } from 'react';
import API from '../../utils/API';

import './style.scss';

const HomeActOfKindness = () => {
  const [cards, setCards] = useState([]);

  useEffect(async () => {
    const { data } = await API.get('kindness/featured');

    setCards(data.featured);
  }, []);

  return (
    <div className="homeActOfKindness">
      <h1>
        act of kindness <span>(Featured)</span>
      </h1>

      <div className="homeActOfKindness__cards">
        {cards.map((card) => (
          <div className="card" key={card._id}>
            <p className="card__title">{card.title}</p>
            <img src={card.photos[0]} alt={card.title} />
            <p className="card__summary">{card.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeActOfKindness;

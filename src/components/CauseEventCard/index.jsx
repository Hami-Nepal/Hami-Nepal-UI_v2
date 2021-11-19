import { Link } from 'react-router-dom';

import Button from '../../components/Button';

import './causeEventCard.scss';

const CauseEventCard = ({ card, href }) => {
  console.log('ma card data herdai xu', card);
  return (
    <div className="causeEventCard">
      <Link to={href}>
        <p className="causeEventCard__title">{card.name}</p>
        <img src={card.photos[0]} alt={card.name} />
        <p className="causeEventCard__summary">{card.summary}</p>
        <Button
          text="Donate"
          variant="official"
          style={{ padding: '.6rem', fontSize: '1.2rem' }}
        />
      </Link>
    </div>
  );
};

export default CauseEventCard;

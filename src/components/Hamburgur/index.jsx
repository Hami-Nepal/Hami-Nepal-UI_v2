import classes from '../../utils/classes';

import './hamburgur.scss';

function Hamburgur({ active, onClickHandler }) {
  const topClass = classes('AnimatedBtn-Top', {
    'AnimatedBtn-TopClick': active,
  });
  const middleClass = classes('AnimatedBtn-Middle', {
    'AnimatedBtn-MiddleClick': active,
  });
  const bottomClass = classes('AnimatedBtn-Bottom', {
    'AnimatedBtn-BottomClick': active,
  });

  return (
    <div className="hamburgur">
      <div className="AnimatedBtn ">
        <span className={topClass}></span>
        <span className={middleClass}></span>
        <span className={bottomClass}></span>
        <button className="AnimatedBtn-Cover" onClick={onClickHandler}>
          &nbsp;
        </button>
      </div>
    </div>
  );
}

export default Hamburgur;

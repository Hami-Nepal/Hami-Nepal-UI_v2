import classes from '../../utils/classes';

import './button.scss';

const Button = (props) => {
  const { text, variant = 'transparent' } = props;

  const buttonClass = classes('Button', {
    'Button-transparent': variant === 'transparent',
    'Button-white': variant === 'white',
    'Button-official': variant === 'official',
  });

  return (
    <button
      {...props}
      className={buttonClass}
      onClick={(e) => e.preventDefault()}
    >
      {text}
    </button>
  );
};

export default Button;

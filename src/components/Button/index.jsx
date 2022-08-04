import './style.scss'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
  signout: 'sign-out',
  prediction: 'prediction'
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ``}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

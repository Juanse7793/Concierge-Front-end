import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  disabled, text, func, className,
}) => (
  <button
    type="button"
    className={`pill ${className}`}
    disabled={disabled}
    onClick={() => func()}
  >
    {text}
  </button>
);

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Button;

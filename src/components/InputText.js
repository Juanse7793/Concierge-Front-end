import React from 'react';
import PropTypes from 'prop-types';
import '../css/InputText.css';

const InputText = ({
  text,
  value,
  func,
  required,
  className,
  autoComplete,
}) => {
  const focus = (e) => {
    console.log('focus', e, e.parentNode);
    e.parentNode.classList.toggle('focus', e === document.activeElement || e.value !== '');
  };

  return (
    <div className={`out ${className}`}>
      <input
        type="text"
        name={text.toLowerCase()}
        value={value}
        onChange={(e) => func(e)}
        required={required}
        onFocus={(e) => focus(e.target)}
        onBlur={(e) => focus(e.target)}
        autoComplete={autoComplete}
        className="pill green white-border"
      />
      <label htmlFor={text.toLowerCase()}>{text}</label>
    </div>
  );
};

InputText.defaultProps = {
  className: '',
  required: false,
  autoComplete: 'off',
};

InputText.propTypes = {
  className: PropTypes.string,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  text: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputText;

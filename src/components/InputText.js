import React from 'react';
import PropTypes from 'prop-types';
import '../css/InputText.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const InputText = ({
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

export const DateRange = ({
  minDate,
  maxDate,
  startDate,
  endDate,
  func,
}) => (
  <div className="out focus">
    <DatePicker
      selectsRange
      minDate={minDate}
      maxDate={maxDate}
      startDate={startDate}
      endDate={endDate}
      popperPlacement="top-end"
      onChange={(e) => func(e)}
      className="pill green white-border"
    />
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label>Reserved Dates</label>
  </div>
);

DateRange.defaultProps = {
  minDate: new Date('2000/12/12'),
  maxDate: new Date('2100/12/12'),
};

DateRange.propTypes = {
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  func: PropTypes.func.isRequired,
};

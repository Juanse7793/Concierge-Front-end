import React from 'react';
import PropTypes from 'prop-types';
import '../css/Inputs.css';
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
    e.parentNode.classList.toggle('focus', e === document.activeElement || e.value !== '');
  };

  return (
    <div className={`out ${className}`}>
      <input
        type="text"
        name={text.toLowerCase()}
        id={text.toLowerCase()}
        value={value}
        onChange={func}
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
  value: '',
};

InputText.propTypes = {
  className: PropTypes.string,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  text: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export const DateRange = ({
  text,
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
      dateFormat="yyyy-MM-dd"
      popperPlacement="top-end"
      showDisabledMonthNavigation
      onChange={(e) => func(e)}
      className="pill green white-border"
    />
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label>{text}</label>
  </div>
);

DateRange.defaultProps = {
  minDate: null,
  maxDate: null,
  startDate: null,
  endDate: null,
  text: 'Dates',
};

DateRange.propTypes = {
  text: PropTypes.string,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  func: PropTypes.func.isRequired,
};

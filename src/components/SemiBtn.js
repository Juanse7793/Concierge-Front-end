import React from 'react';
import PropTypes from 'prop-types';

const SemiBtn = ({ disabled, arrow, func }) => (
  <button
    type="button"
    className={`semi ${arrow}`}
    disabled={disabled}
    onClick={() => func()}
  >
    {arrow === 'prev' ? '◁' : '▷' }
  </button>
);

SemiBtn.propTypes = {
  disabled: PropTypes.bool.isRequired,
  arrow: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default SemiBtn;

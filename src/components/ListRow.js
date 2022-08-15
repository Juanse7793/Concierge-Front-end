import React from 'react';
import PropTypes from 'prop-types';

const ListRow = ({ caption, text }) => (
  <li className="row">
    <span>{caption}</span>
    <span>{text}</span>
  </li>
);

ListRow.propTypes = {
  caption: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ListRow;

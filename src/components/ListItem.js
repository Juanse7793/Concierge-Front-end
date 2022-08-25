import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({
  name, start, end, deleteFunc, id, location,
}) => (
  <li className="row pill list">
    <p>{name}</p>
    <div className="row">
      <small>{location}</small>
      <small>{`${start} ~ ${end}`}</small>
      <button type="button" id={id} className="red pill link" onClick={deleteFunc}>Delete</button>
    </div>
  </li>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deleteFunc: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
};

export default ListItem;

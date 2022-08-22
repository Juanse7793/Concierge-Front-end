import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({
  name, start, end, deleteFunc,
}) => (
  <li className="row pill list">
    <p>{name}</p>
    <div className="row">
      <small>{`${start} ~ ${end}`}</small>
      <button type="button" className="red pill link" onClick={deleteFunc}>Delete</button>
    </div>
  </li>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  deleteFunc: PropTypes.func.isRequired,
};

export default ListItem;

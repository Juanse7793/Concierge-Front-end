import React from 'react';
import PropTypes from 'prop-types';

const EventCard = ({
  image, name, location, price,
}) => (
  <div className="event-card">
    <div className="circle">
      <img src={image} className="eventImage" alt="" />
    </div>
    <h3 className="event-card-title">{name}</h3>
    <p className="event-card-details">{location}</p>
    <p className="event-card-details">
      $
      {price}
    </p>
  </div>
);

EventCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default EventCard;

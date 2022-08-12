import React from 'react';
import PropTypes from 'prop-types';

const EventCard = ({
  id, image, name, location, price,
}) => (
  <a href={`/events/${id}`} className="event-card">
    <div className="circle">
      <img src={image} className="eventImage" alt="" />
    </div>
    <h3 className="event-card-title">{name}</h3>
    <p className="event-card-details">{location}</p>
    <p className="event-card-details">
      $
      {price}
    </p>
  </a>
);

EventCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default EventCard;

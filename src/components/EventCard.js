import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => (
  <Link to={`/events/${event.id}`} className="event-card column">
    <div className="circle">
      <img src={event.image_urls[0]} className="eventImage" alt="" />
    </div>
    <h3 className="event-card-title">{event.name}</h3>
    <p className="event-card-details">{event.location}</p>
    <p className="event-card-details">{`$${event.price}`}</p>
  </Link>
);

EventCard.defaultProps = {
  event: {
    image_urls: [],
  },
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image_urls: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default EventCard;

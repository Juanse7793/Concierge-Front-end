import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailsPage = () => {
  const { id } = useParams();
  const event = useSelector((state) => state.events)
    .find((event) => event.id.toString() === id);

  return (
    <section id="details">
      <div className="side left"><img src={event.image} alt={event.name} /></div>
      <div className="side right">
        <h1>{event.name.toUpperCase()}</h1>
        <ul>
          <li>
            <span>Travel </span>
            <span>
              $
              {event.price}
            </span>
          </li>
          <li>
            <span>Housing and Food </span>
            <span>$100</span>
          </li>
          <li>
            <span>Total </span>
            <span>$100</span>
          </li>
          <li>
            <span>Duration </span>
            <span>{event.end - event.start}</span>
            {/* TODO: Add Unit */}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DetailsPage;

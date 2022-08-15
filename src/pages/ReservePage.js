import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ReservePage = () => {
  const { id } = useParams();
  // TODO: Have selector do this
  const event = useSelector((state) => state.events)
    .find((event) => event.id.toString() === id);

  return (
    <section className="column reserve background">
      <div className="center">
        <h1>{`BOOK A TICKET TO ${event.name.toUpperCase()}`}</h1>
        <hr />
        <p>
          Hello and welcome to the
          {' '}
          <span>CONCIERGE EVENT RESERVATION.</span>
          {' '}
          Please enter the date you would like to attend and
          the city you will be traveling from in the form below to
          book an exclusive, all inclusive trip to the event.
          {' '}
          <span>CONCIERGE</span>
          {' '}
          gives you the ultimate worry-free traveling experience,
          knowing all your needs will have been taken care of by
          {' '}
          <span>CONCIERGE.</span>
        </p>
        <div className="inputs">
          <input type="text" placeholder="City" name="city" />
          <input type="date" name="date" min={event.start} max={event.end} value={event.start} placeholder="Start Date" />
          <input type="date" name="date" min={event.end} max={event.end} value={event.start} placeholder="End Date" />
          <input type="submit" name="submit" value="Book Now" className="white" />
        </div>
      </div>
    </section>
  );
};

export default ReservePage;

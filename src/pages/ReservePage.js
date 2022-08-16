import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';

const ReservePage = () => {
  const { id } = useParams();
  // TODO: Have selector do this
  const event = useSelector((state) => state.events).find(
    (event) => event.id.toString() === id,
  );

  const start = new Date(event.start);
  const end = new Date(event.end);
  const [input, setInput] = useState({
    city: '',
    start,
    end,
  });
  const setInputData = (e) => { setInput({ ...input, [e.target.name]: e.target.value }); };

  return (
    <div className="row">
      <Sidebar />
      <section className="column reserve background">
        <div className="center">
          <h1>{`BOOK A TICKET TO ${event.name.toUpperCase()}`}</h1>
          <hr />
          <p>
            Hello and welcome to the
            {' '}
            <span>CONCIERGE EVENT RESERVATION.</span>
            {' '}
            Please enter the date you would like to attend and the city you will
            be traveling from in the form below to book an exclusive, all
            inclusive trip to the event.
            {' '}
            <span>CONCIERGE</span>
            {' '}
            gives you the
            ultimate worry-free traveling experience, knowing all your needs
            will have been taken care of by
            {' '}
            <span>CONCIERGE.</span>
          </p>
          <div className="inputs">
            <input type="text" name="city" placeholder="City" onChange={(e) => setInputData(e)} className="pill border" />
            <input type="date" name="start" min={start} max={end} value={input.start} onChange={(e) => setInputData(e)} className="pill border" />
            <input type="date" name="end" min={end} max={end} value={input.end} onChange={(e) => setInputData(e)} className="pill border" />
            <input type="submit" name="submit" value="Book Now" className="pill white" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReservePage;

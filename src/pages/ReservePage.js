import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReserveText from '../components/ReserveText';
import { InputText, DateRange } from '../components/Inputs';
import '../css/ReservePage.css';

const ReservePage = () => {
  const { id } = useParams();
  const { events, loading } = useSelector((state) => state.events);

  const event = events.find((event) => event.id.toString() === id);
  const start = event ? new Date(event.start_date) : new Date();
  const end = event ? new Date(event.end_date) : new Date();

  const [input, setInput] = useState({ city: '', start, end });
  const setInputData = (e) => {
    setInput({ ...input, [e.name]: e.value });
  };

  const [dateRange, setDateRange] = useState([start, end]);
  const [startDate, endDate] = dateRange;

  return (
    <section className="column reserve background">
      {loading ? (
        <h1>Please wait...</h1>
      ) : (
        <div className="center">
          <h1 className="black-glow">{`BOOK A TICKET TO ${event.name.toUpperCase()}`}</h1>
          <hr />
          <ReserveText />
          <form className="inputs">
            <InputText text="City" value={input.city} func={(e) => setInputData(e.target)} />
            <DateRange
              minDate={start}
              maxDate={end}
              startDate={startDate}
              endDate={endDate}
              func={(e) => setDateRange(e)}
            />
            <input type="submit" value="Book Now" className="pill white" />
          </form>
          <Link to={`/events/${id}`} className="pill semi prev white moving">◁</Link>
        </div>
      )}
    </section>
  );
};

export default ReservePage;

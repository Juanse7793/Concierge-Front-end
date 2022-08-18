import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReserveText from '../components/ReserveText';
import '../css/ReservePage.css';

const ReservePage = () => {
  const { id } = useParams();
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
  const setInputData = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const [dateRange, setDateRange] = useState([start, end]);
  const [startDate, endDate] = dateRange;

  return (
    <section className="column reserve background">
      <div className="center">
        <h1>{`BOOK A TICKET TO ${event.name.toUpperCase()}`}</h1>
        <hr />
        <ReserveText />
        <div className="inputs">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={input.city}
            onChange={(e) => setInputData(e)}
            required
            autoComplete="off"
            className="pill green border"
          />
          <DatePicker
            selectsRange
            minDate={start}
            maxDate={end}
            startDate={startDate}
            endDate={endDate}
            popperPlacement="top-end"
            onChange={(e) => setDateRange(e)}
            className="pill green border"
          />
          <input type="submit" name="submit" value="Book Now" className="pill white" />
        </div>
        <Link to={`/events/${id}`} className="pill semi prev white moving">◁</Link>
      </div>
    </section>
  );
};

export default ReservePage;

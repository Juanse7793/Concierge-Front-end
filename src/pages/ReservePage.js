import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Sidebar from '../components/Sidebar';

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
    <div className="row">
      <Sidebar />
      <section className="column reserve background">
        <div className="center">
          <h1>{`BOOK A TICKET TO ${event.name.toUpperCase()}`}</h1>
          <hr />
          <p>
            Hello and welcome to the
            {' '}
            <b>CONCIERGE EVENT RESERVATION.</b>
            {' '}
            Please enter the date you would like to attend and the city you will
            be traveling from in the form below to book an exclusive, all
            inclusive trip to the event.
            {' '}
            <b>CONCIERGE</b>
            {' '}
            gives you the
            ultimate worry-free traveling experience, knowing all your needs
            will have been taken care of by
            {' '}
            <b>CONCIERGE.</b>
          </p>
          <div className="inputs">
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={(e) => setInputData(e)}
              required
              autoComplete="off"
              className="pill border"
            />
            <DatePicker
              selectsRange
              minDate={start}
              maxDate={end}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => { setDateRange(update); }}
              className="pill border"
            />
            <input
              type="submit"
              name="submit"
              value="Book Now"
              className="pill white"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReservePage;

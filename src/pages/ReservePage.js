import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReserveText from '../components/ReserveText';
import InputText from '../components/InputText';
import '../css/ReservePage.css';
import '../css/InputText.css';

const ReservePage = () => {
  const { id } = useParams();
  const { events, loading } = useSelector((state) => state.events);

  const event = events.find((event) => event.id.toString() === id);
  const start = event ? new Date(event.start_date) : new Date();
  const end = event ? new Date(event.end_date) : new Date();
  console.log('start', event, start);

  const [input, setInput] = useState({ city: '', start, end });
  const setInputData = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const [dateRange, setDateRange] = useState([start, end]);
  const [startDate, endDate] = dateRange;

  return (
    <section className="column reserve background">
      {loading ? (
        <h1>Please wait...</h1>
      ) : (
        <div className="center">
          <h1>{`BOOK A TICKET TO ${event.name.toUpperCase()}`}</h1>
          <hr />
          <ReserveText />
          <form className="inputs">
            <InputText text="City" value={input.city} func={setInputData} />
            <div className="out focus">
              <DatePicker
                selectsRange
                minDate={start}
                maxDate={end}
                startDate={startDate}
                endDate={endDate}
                popperPlacement="top-end"
                onChange={(e) => setDateRange(e)}
                className="pill green white-border"
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Reserved Dates</label>
            </div>
            <input type="submit" name="submit" value="Book Now" className="pill white" />
          </form>
          <Link to={`/events/${id}`} className="pill semi prev white moving">◁</Link>
        </div>
      )}
    </section>
  );
};

export default ReservePage;

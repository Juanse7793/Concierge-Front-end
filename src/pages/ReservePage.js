import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReserveText from '../components/ReserveText';
import { InputText, DateRange } from '../components/Inputs';
import { addReservation } from '../redux/reducers/users';
import '../css/ReservePage.css';

const ReservePage = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user.user);
  const { events, loading } = useSelector((state) => state.events);

  const event = events.find((event) => event.id.toString() === id);
  const start = event ? new Date(event.start_date) : new Date();
  const end = event ? new Date(event.end_date) : new Date();

  const [input, setInput] = useState({
    city: '',
    user_id: user.id,
    event_id: id,
  });
  const setInputData = (e) => {
    setInput({ ...input, [e.name]: e.value });
  };
  console.log('try', event, input);

  const [dateRange, setDateRange] = useState([start, end]);
  const [startDate, endDate] = dateRange;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // setInput({ ...input, start: startDate, end: endDate });
    dispatch(addReservation(Number(user.id), { ...input, start: startDate, end: endDate }));
  };

  return (
    <section className="column reserve background">
      {loading ? (
        <h1>Please wait...</h1>
      ) : (
        <div className="center">
          <h1 className="black-glow">{`BOOK A TICKET TO ${event.name.toUpperCase()}`}</h1>
          <hr />
          <ReserveText />
          <form className="inputs" onSubmit={handleSubmit}>
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

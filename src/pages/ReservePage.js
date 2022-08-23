import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReserveText from '../components/ReserveText';
import { InputText, DateRange } from '../components/Inputs';
import { addReservation, signIn } from '../redux/reducers/users';
import '../css/ReservePage.css';

const ReservePage = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user.user);
  const event = useSelector((state) => state.events.events).find(
    (event) => event.id.toString() === id,
  );

  const start = new Date(event.start_date);
  const end = new Date(event.end_date);
  const [input, setInput] = useState({
    city: '',
    start,
    end,
    user_id: user.id,
    event_id: event.id,
  });

  const adding = useSelector((state) => state.user.adding);
  if (adding) {
    signIn(user.name);
    window.location.href = `/events/${id}`;
  }

  const setInputData = (e) => {
    setInput({ ...input, [e.name]: e.value });
  };

  const [dateRange, setDateRange] = useState([start, end]);
  const [startDate, endDate] = dateRange;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReservation(Number(user.id), { ...input, start: startDate, end: endDate }));
    setInput({ city: '', start: startDate, end: endDate });
  };

  return (
    <section className="column reserve background">
      {!event ? (
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

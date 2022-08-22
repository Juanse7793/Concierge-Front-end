import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Sidebar from '../components/Sidebar';
import ReserveText from '../components/ReserveText';
import { addReservation } from '../redux/reducers/users';

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
  const setInputData = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const [dateRange, setDateRange] = useState([start, end]);
  const [startDate, endDate] = dateRange;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReservation(Number(user.id), input));
    setInput({ city: '', start: startDate, end: endDate });
  };

  return (
    <div className="row">
      <Sidebar />
      <section className="column reserve background">
        <div className="center">
          <h1>{`BOOK A TICKET TO ${event.name.toUpperCase()}`}</h1>
          <hr />
          <ReserveText />
          <form className="inputs" onSubmit={handleSubmit}>
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
              onChange={(update) => {
                setDateRange(update);
              }}
              className="pill border"
            />
            <input
              type="submit"
              name="submit"
              value="Book Now"
              className="pill white"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default ReservePage;

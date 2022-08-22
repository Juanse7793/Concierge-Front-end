import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEvent, fetchEvents } from '../redux/reducers/events';
import { InputText, DateRange } from '../components/Inputs';

function AddEvent() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const [input, setInput] = useState({ name: '', location: '', price: '' });
  const setInputData = (e) => {
    setInput({ ...input, [e.name]: e.value });
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addEvent({
        start_date: startDate,
        end_date: endDate,
        ...input,
      }),
    );
    const finished = dispatch(fetchEvents());
    if (finished) { window.location.href = window.location.href.slice(0, -9); }
  };

  return (
    <section className="add-event-main background column">
      <form className="add-event-form column" onSubmit={handleSubmit}>
        <h1 className="add-event-title black-glow">Add Event</h1>
        <InputText
          text="Name"
          value={input.name}
          func={(e) => setInputData(e.target)}
        />
        <InputText
          text="Location"
          value={input.location}
          func={(e) => setInputData(e.target)}
        />
        <InputText
          text="Price"
          value={input.price}
          func={(e) => setInputData(e.target)}
        />
        <DateRange
          startDate={startDate}
          endDate={endDate}
          func={(e) => setDateRange(e)}
        />

        <h2 className="add-event-images-title black-glow">Event Images</h2>
        <input type="file" multiple id="new-event-image" />
        <input type="submit" value="Add Event" className="pill white" />
      </form>
    </section>
  );
}

export default AddEvent;

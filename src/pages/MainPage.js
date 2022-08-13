import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EventCard from '../components/EventCard';
import Button from '../components/Button';

const MainPage = () => {
  const events = useSelector((state) => state.events);
  const [slice, setSlice] = useState(0);
  const step = 3;
  // const sliceEventsPrev = events.slice(slice - step, slice);
  const sliceEvents = events.slice(slice, slice + step);
  // const sliceEventsNext = events.slice(slice + step, slice + (2 * step));

  const prevSlice = () => {
    if (slice <= step) setSlice(0);
    else setSlice(slice - step);
  };
  const nextSlice = () => {
    if (slice >= events.length - step) setSlice(events.length - step);
    else setSlice(slice + step);
  };

  return (
    <section className="column">
      <div className="title-box">
        <h1 className="title">EXCITING NEW EVENTS!</h1>
        <h2 className="subtitle">Please select an event to begin:</h2>
      </div>
      <div className="events-list row">
        <Button text="◁" disabled={slice < step} func={prevSlice} className="semi prev" />
        {sliceEvents.map((event) => (<EventCard key={event.id} event={event} />))}
        <Button text="▷" disabled={slice > events.length - step} func={nextSlice} className="semi next" />
      </div>
    </section>
  );
};

export default MainPage;

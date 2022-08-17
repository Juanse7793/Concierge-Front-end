import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EventCard from '../components/EventCard';
import Button from '../components/Button';
import Sidebar from '../components/Sidebar';

const MainPage = () => {
  const events = useSelector((state) => state.eventReducer.events);
  const [slice, setSlice] = useState(0);
  const step = 3; // Math.floor((window.innerWidth - (86 * 2)) / 282);
  // console.log(step);
  const sliceEvents = events.slice(slice, slice + step);

  const prevSlice = () => {
    if (slice <= step) setSlice(0);
    else setSlice(slice - step);
  };
  const nextSlice = () => {
    if (slice >= events.length - step) setSlice(events.length - step);
    else setSlice(slice + step);
  };

  return (
    <div className="row">
      <Sidebar />
      <section className="column">
        <div className="title-box">
          <h1 className="title">EXCITING NEW EVENTS!</h1>
          <h2 className="subtitle">Please select an event to begin:</h2>
        </div>
        <div className="events-list row">
          <Button
            text="◁"
            disabled={slice < step}
            func={prevSlice}
            className="semi prev"
          />
          {sliceEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          <Button
            text="▷"
            disabled={slice > events.length - step}
            func={nextSlice}
            className="semi next"
          />
        </div>
      </section>
    </div>
  );
};

export default MainPage;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import EventCard from '../components/EventCard';
import Button from '../components/Button';

const MainPage = () => {
  const events = useSelector((state) => state.events);
  const [slice, setSlice] = useState(0);
  const step = 3; // Math.floor((window.innerWidth - (86 * 2)) / 282);
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
    <section className="column">
      <div className="title-box">
        <h1 className="title">EXCITING NEW EVENTS!</h1>
        <h2 className="subtitle">Please select an event to begin:</h2>
      </div>
      <div className="events-list row">
        <Button text="◁" disabled={slice < step} func={prevSlice} className="semi prev" />
        <div className="events-list row transit">
          <TransitionGroup component={null}>
            {sliceEvents.map((event) => (
              <CSSTransition key={event.id} timeout={5000} classNames="card">
                <EventCard event={event} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Button text="▷" disabled={slice > events.length - step} func={nextSlice} className="semi next" />
      </div>
    </section>
  );
};

export default MainPage;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import EventCard from '../components/EventCard';
import Button from '../components/Button';

const MainPage = () => {
  const events = useSelector((state) => state.events);
  const [slice, setSlice] = useState(0);

  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => { setWidth(window.innerWidth); });

  const wide = width > 768;
  const step = wide ? Math.floor(((width * 0.8) - (86 * 2)) / 250) : 1;
  const diameter = (((0.8 * width) - 172) / step) - (2 * 16 * step);

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
      <div className="events-list row" style={{ '--diameter': `min(${diameter}px, 250px)` }}>
        <Button text="◁" disabled={slice < step} func={prevSlice} className="semi prev green" />
        <div className="events-list row transit">
          <TransitionGroup component={null}>
            {sliceEvents.map((event) => (
              <CSSTransition key={event.id} timeout={5000} classNames="card">
                <EventCard event={event} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Button text="▷" disabled={slice > events.length - step} func={nextSlice} className="semi next green" />
      </div>
    </section>
  );
};

export default MainPage;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import EventCard from '../components/EventCard';

const MainPage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => { setWidth(window.innerWidth); });
  const wide = width > 768;
  // 20vw: Sidebar, 172px buttons
  const availableWidth = (width * 0.8) - 172;
  // MinWidth 250px, Margin etc 64px
  const step = wide ? Math.floor(availableWidth / (250 + 64)) : 1;
  // const diameter = (availableWidth / (step - 32));

  const events = useSelector((state) => state.events.events);
  const [slice, setSlice] = useState(0);
  const sliceEvents = events.slice(slice, slice + step);

  const isFirst = slice < step;
  const isLast = slice > events.length - step;

  return (
    <section className="column">
      <div className="title-box">
        <h1 className="title">EXCITING NEW EVENTS!</h1>
        <h2 className="subtitle">Please select an event to begin:</h2>
      </div>
      <div className="events-list row">
        <button type="button" disabled={isFirst} onClick={() => { setSlice(slice - step); }} className="pill semi prev green">◁</button>
        <div className="events-list row transit">
          <TransitionGroup component={null}>
            {sliceEvents.map((event) => (
              <CSSTransition key={event.id} timeout={5000} classNames="card">
                <EventCard event={event} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <button type="button" disabled={isLast} onClick={() => { setSlice(slice + step); }} className="pill semi next green">▷</button>
      </div>
    </section>
  );
};

export default MainPage;

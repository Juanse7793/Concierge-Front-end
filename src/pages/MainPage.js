import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import EventCard from '../components/EventCard';
import { fetchEvents } from '../redux/reducers/events';
import '../css/MainPage.css';

const MainPage = () => {
  const noderef = React.useRef(null);

  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => { setWidth(window.innerWidth); });
  const wide = width > 768;
  const availableWidth = (width * 0.8) - 172;
  const step = wide ? Math.floor(availableWidth / (250 + 64)) : 1;

  const events = useSelector((state) => state.events.events);
  const [slice, setSlice] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const sliceEvents = events.slice(slice, slice + step);

  const isFirst = slice <= 0;
  const isLast = slice >= events.length - step;

  return (
    <section className="column">
      <div className="title-box">
        <h1 className="title green-glow">EXCITING NEW EVENTS!</h1>
        <h2 className="subtitle">Please select an event to begin:</h2>
      </div>
      <div className="events-list row">
        <button type="button" disabled={isFirst} onClick={() => { setSlice(slice - step || 0); }} className="pill semi prev green">◁</button>
        <div className="events-list row transit">
          <TransitionGroup component={null}>
            {sliceEvents.map((event) => (
              <CSSTransition key={event.id} timeout={9000} classNames="card" nodeRef={noderef}>
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

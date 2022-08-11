import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EventCard from '../components/EventCard';
import SemiBtn from '../components/SemiBtn';

const MainPage = () => {
  const events = useSelector((state) => state.events);
  const [slice, setSlice] = useState(0);
  const step = 3;
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
    <div>
      <div className="title-box">
        <h1 className="title">Exiting New Events!</h1>
        <h2 className="subtitle">Please select an event</h2>
      </div>
      <div id="event-list">
        <SemiBtn arrow="prev" disabled={slice < step} func={prevSlice} />
        {sliceEvents.map((event) => (
          <EventCard
            key={event.id}
            name={event.name}
            image={event.image}
            location={event.location}
            price={event.price}
          />
        ))}
        <SemiBtn arrow="next" disabled={slice > events.length - step} func={nextSlice} />
      </div>
    </div>
  );
};

export default MainPage;

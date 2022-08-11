import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import eventImage from '../images/carrington_event.jpg';

const MainPage = () => {
  const events = useSelector((state) => state.events);
  const [three, setThree] = useState(0);
  const prevThree = () => {
    if (three <= 3) setThree(0);
    else setThree(three - 3);
  };
  const nextThree = () => {
    if (three >= events.length - 3) setThree(events.length - 3);
    else setThree(three + 3);
  };
  return (
    <div>
      <div className="heading">
        <h1>Exiting New Events!</h1>
        <h2>Please select an event</h2>
      </div>
      <div id="event-list">
        <button type="button" className="green-semi" id="prev" onClick={() => prevThree()}>◁</button>
        {events.slice(three, three + 3).map((event) => (
          <div className="event-card" key={event.id}>
            <div className="circle">
              <img src={event.image} className="eventImage" alt="" />
            </div>
            <h3 className="event-card-title">{event.name}</h3>
            <p className="event-card-details">{event.location}</p>
            <p className="event-card-details">
              $
              {event.price}
            </p>
          </div>
        ))}
        <button type="button" className="green-semi" id="next" onClick={() => nextThree()}>▷</button>
      </div>
    </div>
  );
};

export default MainPage;

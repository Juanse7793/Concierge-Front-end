import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListRow from '../components/ListRow';
import '../css/DetailsPage.css';

const DetailsPage = () => {
  const { id } = useParams();
  const event = useSelector((state) => state.events).find(
    (event) => event.id.toString() === id,
  );
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => { setWidth(window.innerWidth); });

  const wide = width > 768;
  const style = {
    background: `url(${event.image}) no-repeat center / cover`,
  };

  return (
    <section className="row details" style={wide ? {} : style}>
      <div className="side left column">
        {wide ? <img src={event.image} alt={event.name} /> : null}
        <Link to="/" className={`semi ${wide ? 'green' : 'white'} pill prev`}>
          ◁
        </Link>
      </div>
      <div className="side right column">
        <div>
          <h1>{event.name.toUpperCase()}</h1>
          <ul className="column">
            <ListRow caption="Travel Expenses" text={`$${event.price}`} />
            <ListRow caption="Housing and Food" text="$100" />
            <ListRow caption="Total" text={`$${event.price + 100}`} />
            <ListRow
              caption="Duration"
              text={`${
                (new Date(event.end) - new Date(event.start)) / (1000 * 60 * 60 * 24) || 1
              } days`}
            />
          </ul>
        </div>
        <Link to="./reserve" className={`pill ${wide ? 'green' : 'white'}`}>
          Reserve
        </Link>
      </div>
    </section>
  );
};

export default DetailsPage;

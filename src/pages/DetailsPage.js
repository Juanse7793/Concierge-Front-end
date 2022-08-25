import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useSelector } from 'react-redux';
import ListRow from '../components/ListRow';
import '../css/DetailsPage.css';

const DetailsPage = () => {
  const { id } = useParams();
  const { events, loading } = useSelector((state) => state.events);

  const event = events.find((event) => event.id.toString() === id);
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });

  const wide = width > 768;
  const style = !event ? {} : {
    background: `url(${event.image_urls[0]}) no-repeat center / cover`,
  };

  return (
    <section className="row details" style={wide ? {} : style}>
      {loading ? (
        <h1>Please wait...</h1>
      ) : (
        <>
          <div className="side left column">
            {wide ? <img src={event.image_urls[0]} alt={event.name} /> : null}
            <Link
              to="/"
              className={`semi ${wide ? 'green' : 'white'} moving pill prev`}
            >
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
                <ListRow caption="Location" text={event.location} />
                <ListRow caption="Start Date" text={event.start_date} />
                <ListRow caption="End Date" text={event.end_date} />
                <ListRow
                  caption="Duration"
                  text={`${(new Date(event.end_date) - new Date(event.start_date)) / (1000 * 60 * 60 * 24) + 1} days`}
                />
              </ul>
            </div>
            <Link to="./reserve" className={`pill ${wide ? 'green' : 'white'}`}>
              <SettingsOutlinedIcon />
              Reserve
              <span>▷</span>
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default DetailsPage;

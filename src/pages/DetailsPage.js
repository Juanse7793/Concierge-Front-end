import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListRow from '../components/ListRow';
import Sidebar from '../components/Sidebar';

const DetailsPage = () => {
  const { id } = useParams();
  const event = useSelector((state) => state.events).find(
    (event) => event.id.toString() === id,
  );

  return (
    <div className="row">
      <Sidebar />
      <section className="row details">
        <div className="side left column">
          <img src={event.image} alt={event.name} />
          <Link to="/" className="semi pill prev">
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
                  (new Date(event.end) - new Date(event.start)) / (1000 * 60 * 60 * 24)
                } days`}
              />
            </ul>
          </div>
          <Link to="./reserve" className="pill">
            Reserve
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DetailsPage;

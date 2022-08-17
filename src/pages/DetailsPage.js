import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListRow from '../components/ListRow';

const DetailsPage = () => {
  const { id } = useParams();
  const event = useSelector((state) => state.events).find(
    (event) => event.id.toString() === id,
  );

  return (
    <section className="row details">
      <div className="side left column">
        <img src={event.image} alt={event.name} />
        <Link to="/" className="semi green pill prev">
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
        <Link to="./reserve" className="pill green">
          Reserve
        </Link>
      </div>
    </section>
  );
};

export default DetailsPage;

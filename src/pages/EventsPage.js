import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';

const EventsPage = () => {
  const events = useSelector((state) => state.eventReducer.events);

  // const deleteEventHandler = (e) => {

  // };

  return (
    <div className="row">
      <Sidebar />
      <section>
        {events.map((event) => (
          <ul key={event.id}>
            <li className="row event-name">
              <p>{event.name}</p>
              <button type="button" className="delete-btn" id={event.id}>Delete</button>
            </li>
          </ul>
        ))}
      </section>
    </div>
  );
};

export default EventsPage;

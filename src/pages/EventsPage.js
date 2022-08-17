import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent } from '../redux/reducers/events';
import Sidebar from '../components/Sidebar';

const EventsPage = () => {
  const events = useSelector((state) => state.eventReducer.events);
  const dispatch = useDispatch();

  const deleteEventHandler = (e) => {
    dispatch(deleteEvent(Number(e.target.id)));
    // deleteEvent(Number(e.target.id));
  };

  return (
    <div className="row">
      <Sidebar />
      <section>
        {events.map((event) => (
          <ul key={event.id}>
            <li className="row event-name">
              <p>{event.name}</p>
              <button type="button" className="delete-btn" id={event.id} onClick={deleteEventHandler}>Delete</button>
            </li>
          </ul>
        ))}
      </section>
    </div>
  );
};

export default EventsPage;

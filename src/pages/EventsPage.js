import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent } from '../redux/reducers/events';

const EventsPage = () => {
  const events = useSelector((state) => state.events.events);
  const dispatch = useDispatch();

  const deleteEventHandler = (e) => {
    dispatch(deleteEvent(Number(e.target.id)));
    // deleteEvent(Number(e.target.id));
  };

  return (
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
  );
};

export default EventsPage;

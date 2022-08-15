import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent } from '../redux/reducers/events';

const EventsPage = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const deleteEventHandler = (e) => {
    const id = e.target.getAttribute('id');
    dispatch(deleteEvent(id));
  };

  return (
    <div>
      {events.map((event) => (
        <ul key={event.id}>
          <li id="event-name">
            <p>{event.name}</p>
            <button type="button" className="delete-btn" id={event.id} onClick={deleteEventHandler}>Delete</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default EventsPage;

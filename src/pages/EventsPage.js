import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent } from '../redux/reducers/events';
import { signIn } from '../redux/reducers/users';
import ListItem from '../components/ListItem';

const EventsPage = () => {
  const user = useSelector((state) => state.user.user);
  const events = useSelector((state) => state.events.events);
  const dispatch = useDispatch();

  const deleteEventHandler = (e) => {
    dispatch(deleteEvent(Number(e.target.id)));
    signIn(user.name);
  };

  return (
    <section>
      {events.map((event) => (
        <ul key={event.id}>
          <ListItem
            name={event.name}
            start={event.start_date}
            end={event.end_date}
            id={event.id}
            deleteFunc={deleteEventHandler}
          />
        </ul>
      ))}
    </section>
  );
};

export default EventsPage;

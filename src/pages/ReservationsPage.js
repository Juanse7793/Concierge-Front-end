import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation } from '../redux/reducers/users';
import ListItem from '../components/ListItem';

const ReservationsPage = () => {
  const user = useSelector((state) => state.user.user);
  const events = useSelector((state) => state.events.events);
  const dispatch = useDispatch();

  const deleteReservationHandler = (e) => {
    dispatch(deleteReservation(Number(user.id), Number(e.target.id)));
  };

  return (
    <section>
      {user.reservations.map((reservation) => (
        <ul key={reservation.id}>
          {events.length <= 0 ? (<li className="row">Please wait...</li>) : (
            <ListItem
              name={events.find((event) => event.id === reservation.event_id).name}
              start={reservation.start_date}
              end={reservation.end_date}
              deleteFunc={deleteReservationHandler}
            />
          )}
        </ul>
      ))}
    </section>
  );
};

export default ReservationsPage;

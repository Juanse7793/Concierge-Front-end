import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation, signIn } from '../redux/reducers/users';
import ListItem from '../components/ListItem';

const ReservationsPage = () => {
  const user = useSelector((state) => state.user.user);
  const events = useSelector((state) => state.events.events);
  const dispatch = useDispatch();

  const deleteReservationHandler = (e) => {
    dispatch(deleteReservation(Number(user.id), Number(e.target.id)));
  };

  useEffect(() => {
    dispatch(signIn(user.name));
  }, [dispatch]);

  return (
    <section>
      {user.reservations.map((reservation) => (
        <ul key={reservation.id}>
          {events.length <= 0 ? (<li className="row">Please wait...</li>) : (
            <ListItem
              name={events.find((event) => event.id === reservation.event_id).name}
              start={new Date(reservation.start).toDateString()}
              end={new Date(reservation.end).toDateString()}
              id={reservation.id}
              deleteFunc={deleteReservationHandler}
              key={reservation.id}
            />
          )}
        </ul>
      ))}
    </section>
  );
};

export default ReservationsPage;

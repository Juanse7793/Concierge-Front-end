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

  const eventIds = events.map((event) => event.id);
  const filteredRes = user.reservations.filter((reservation) => eventIds
    .includes(reservation.event_id));

  return (
    <section>
      {filteredRes.map((res) => (
        <ul key={res.id}>
          <ListItem
            name={events.find((event) => event.id === res.event_id).name}
            start={new Date(res.start).toDateString()}
            end={new Date(res.end).toDateString()}
            id={res.id}
            deleteFunc={deleteReservationHandler}
            key={res.id}
          />
        </ul>
      ))}
    </section>
  );
};

export default ReservationsPage;

import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation } from '../redux/reducers/users';

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
          <li className="row reservation-name">
            <p>
              {events.length > 0 ? events.find((event) => event.id === reservation.event_id).name : ''}
            </p>
            <button type="button" className="delete-btn" id={reservation.id} onClick={deleteReservationHandler}>Delete</button>
          </li>
        </ul>
      ))}
    </section>
  );
};

export default ReservationsPage;

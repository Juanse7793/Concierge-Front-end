import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation } from '../redux/reducers/reservations';
import Sidebar from './Sidebar';

const ReservationsPage = () => {
  const user = useSelector((state) => state.user.user);
  const events = useSelector((state) => state.events.events);
  const reservations = useSelector((state) => state.reservations.reservations.filter(
    (reservation) => reservation.user_id === user.id,
  ));
  const dispatch = useDispatch();

  const deleteReservationHandler = (e) => {
    dispatch(deleteReservation(Number(e.target.id)));
  };

  return (
    <div className="row">
      <Sidebar />
      <section>
        {reservations.map((reservation) => (
          <ul key={reservation.id}>
            <li className="row reservation-name">
              <p>
                {events.find((event) => event.id === reservation.event_id).name}
              </p>
              <button
                type="button"
                className="delete-btn"
                id={reservation.id}
                onClick={deleteReservationHandler}
              >
                Delete
              </button>
            </li>
          </ul>
        ))}
      </section>
    </div>
  );
};

export default ReservationsPage;

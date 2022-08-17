import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation } from '../redux/reducers/reservations';

const ReservationsPage = () => {
  const reservations = useSelector((state) => state.reservations);
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const deleteReservationHandler = (e) => {
    dispatch(deleteReservation(Number(e.target.id)));
  };

  return (
    <section>
      {reservations.map((reservation) => (
        <ul key={reservation.id}>
          <li className="row reservation-name">
            <p>{ events.find((event) => event.id === reservation.id).name }</p>
            <button type="button" className="delete-btn" id={reservation.id} onClick={deleteReservationHandler}>Delete</button>
          </li>
        </ul>
      ))}
    </section>
  );
};

export default ReservationsPage;

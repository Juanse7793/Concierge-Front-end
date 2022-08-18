import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch } from 'react-redux';
import { addEvent } from '../redux/reducers/events';

function AddEvent() {
  // eslint-disable-next-line camelcase
  const [start_date, setStart] = useState();
  // eslint-disable-next-line camelcase
  const [end_date, setEnd] = useState();
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [price, setPrice] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEvent({
      start_date, end_date, name, location, price,
    }));
    setName('');
    setLocation('');
    setPrice('');
    setStart('');
    setEnd('');
  };

  const sx = {
    width: '500px',
    color: 'black',
  };

  return (
    <div className="add-event-main">
      <div className="add-event-header">
        <h1 className="add-event-title">Add Event</h1>
      </div>
      <form className="add-event-form" onSubmit={handleSubmit}>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={sx}
          id="event-name-input"
          label="Event Name"
          margin="normal"
        />
        <TextField
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          sx={sx}
          id="event-location-input"
          label="Event Location"
          margin="normal"
        />
        <TextField
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          sx={sx}
          id="event-price-input"
          label="Event Price"
          margin="normal"
        />
        <div className="add-event-dates">
          <h2 className="add-event-dates-title">Event dates</h2>
        </div>
        <TextField
          // eslint-disable-next-line camelcase
          value={start_date}
          onChange={(e) => setStart(e.target.value)}
          sx={sx}
          id="event-start-input"
          label="Event Start"
          margin="normal"
        />
        <TextField
          // eslint-disable-next-line camelcase
          value={end_date}
          onChange={(e) => setEnd(e.target.value)}
          sx={sx}
          id="event-end-input"
          label="Event End"
          margin="normal"
        />
        <div className="add-event-images">
          <h2 className="add-event-images-title">Event images</h2>
        </div>
        <input type="file" multiple id="new-event-image" />
        <input type="submit" id="submit-event" value="Add Event" />
      </form>
    </div>
  );
}

export default AddEvent;

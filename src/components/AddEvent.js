import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch } from 'react-redux';
import { addEvent } from '../redux/reducers/events';

function AddEvent() {
  // eslint-disable-next-line camelcase
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: 0,
    images: [],
    start_date: '',
    end_date: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.name]: e.value });
    console.log('formdata', formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('This is the image (or not)', image);
    console.log('formdata', formData);
    const data = new FormData();
    data.append('name', formData.name);
    data.append('location', formData.location);
    data.append('price', formData.price);
    data.append('start_date', formData.start_date);
    data.append('end_date', formData.end_date);
    formData.images.forEach((el, i) => {
      data.append('images[]', formData.images[i], el);
    });

    console.log('data!');
    console.log('data', data, data.get('name'));

    dispatch(addEvent(data));
  };

  const fileSelectedHandler = (e) => {
    setFormData({ ...formData, images: [...e.target.files] });
  };

  return (
    <section className="add-event-main">
      <div className="add-event-header">
        <h1 className="add-event-title">Add Event</h1>
      </div>
      <form className="add-event-form" onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={formData.name}
          onChange={(e) => handleChange(e.currentTarget)}
          label="Event Name"
          margin="normal"
        />
        <TextField
          name="location"
          value={formData.location}
          onChange={(e) => handleChange(e.currentTarget)}
          label="Event Location"
          margin="normal"
        />
        <TextField
          name="price"
          value={formData.price}
          onChange={(e) => handleChange(e.currentTarget)}
          label="Event Price"
          margin="normal"
        />
        <div className="add-event-dates">
          <h2 className="add-event-dates-title">Event dates</h2>
        </div>
        <TextField
          name="start_date"
          value={formData.start_date}
          onChange={(e) => handleChange(e.currentTarget)}
          label="Event Start"
          margin="normal"
        />
        <TextField
          name="end_date"
          value={formData.end_date}
          onChange={(e) => handleChange(e.currentTarget)}
          label="Event End"
          margin="normal"
        />
        <input type="file" multiple id="new-event-image" name="images" onInput={fileSelectedHandler} accept="image/*" />
        <input type="submit" id="submit-event" value="Add Event" />
      </form>
    </section>
  );
}

export default AddEvent;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEvent } from '../redux/reducers/events';
import { InputText, DateRange } from '../components/Inputs';

function AddEvent() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: '',
    images: [],
    start_date: '',
    end_date: '',
  });

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const setInputData = (e) => {
    setFormData({ ...formData, [e.name]: e.value });
  };
  const fileSelectedHandler = (e) => {
    setFormData({ ...formData, images: [...e.target.files] });
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    const data = new FormData();
    data.append('name', formData.name);
    data.append('location', formData.location);
    data.append('price', formData.price);
    data.append('start_date', startDate);
    data.append('end_date', endDate);
    formData.images.forEach((el, i) => {
      data.append('images[]', formData.images[i], el);
    });

    e.preventDefault();
    dispatch(addEvent(data));
  };

  return (
    <section className="add-event-main background column">
      <form className="add-event-form column" onSubmit={handleSubmit}>
        <h1 className="add-event-title black-glow">Add Event</h1>
        <InputText
          text="Name"
          value={formData.name}
          func={(e) => setInputData(e.target)}
        />
        <InputText
          text="Location"
          value={formData.location}
          func={(e) => setInputData(e.target)}
        />
        <InputText
          text="Price"
          value={formData.price}
          func={(e) => setInputData(e.target)}
        />
        <DateRange
          startDate={startDate}
          endDate={endDate}
          func={(e) => setDateRange(e)}
        />

        <h2 className="add-event-images-title black-glow">Event Images</h2>
        <input type="file" multiple id="new-event-image" name="images" onInput={fileSelectedHandler} accept="image/*" />
        <input type="submit" value="Add Event" className="pill white" />
      </form>
    </section>
  );
}

export default AddEvent;

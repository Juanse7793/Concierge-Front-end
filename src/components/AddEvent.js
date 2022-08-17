import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function AddEvent() {
  const [valueStart, setValue1] = React.useState(null);
  const [valueEnd, setValue2] = React.useState(null);
  const [valueName, setName] = React.useState(null);
  const [valueLocation, setLocation] = React.useState(null);
  const [valuePrice, setPrice] = React.useState(null);

  const sx = {
    width: '500px',
    color: 'black',
  };

  const handleChangeName = (value) => {
    setName(value);
  };

  const handleChangeLocation = (value) => {
    setLocation(value);
  };

  const handleChangePrice = (value) => {
    setPrice(value);
  };

  return (
    <div className="add-event-main">
      <div className="add-event-header">
        <h1 className="add-event-title">Add Event</h1>
      </div>
      <form className="add-event-form">
        <TextField
          value={valueName}
          onChange={(e) => handleChangeName(e.target.value)}
          sx={sx}
          id="event-name-input"
          label="Event Name"
          margin="normal"
        />
        <TextField
          value={valueLocation}
          onChange={(e) => handleChangeLocation(e.target.value)}
          sx={sx}
          id="event-location-input"
          label="Event Location"
          margin="normal"
        />
        <TextField
          value={valuePrice}
          onChange={(e) => handleChangePrice(e.target.value)}
          sx={sx}
          id="event-price-input"
          label="Event Price"
          margin="normal"
        />

        <div className="add-event-dates">
          <h2 className="add-event-dates-title">Event dates</h2>
        </div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Start Date"
            value={valueStart}
            onChange={(newValue) => {
              setValue1(newValue);
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            renderInput={(params) => <TextField sx={sx} {...params} />}
          />
          <br />
          <DatePicker
            label="End Date"
            value={valueEnd}
            className="DatePicker"
            onChange={(newValue) => {
              setValue2(newValue);
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            renderInput={(params) => <TextField sx={sx} {...params} />}
          />
        </LocalizationProvider>
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

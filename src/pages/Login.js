import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { signIn, signUp } from '../redux/reducers/users';
import '../css/Login.css';

export default function Login() {
  const dispatch = useDispatch();
  const [sign, setSign] = useState(true); // true: Sign in, false: Sign up
  const error = useSelector((state) => state.user.error);

  const switchSign = (event) => {
    event.preventDefault();
    setSign(!sign);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    sign ? dispatch(signIn(username)) : dispatch(signUp(username));
  };

  return (
    <section className="background row">
      <div className="login row">
        <img src="concierge.png" alt="logo" />
        <form onSubmit={handleSubmit} className="column">
          <h1>
            Sign
            {sign ? ' In' : ' Up'}
          </h1>
          <TextField
            margin="normal"
            required
            label="Username"
            name="username"
            autoComplete="username"
          />
          {error ? <small className="error">{error}</small> : null}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <button type="submit" id="sign-btn" className="pill green">
            Sign
            {' '}
            {sign ? ' In' : ' Up'}
          </button>
          <Link to="/sign-up" onClick={(e) => switchSign(e)}>
            {sign ? "Don't have an account? Sign Up" : 'Have an account already? Sign In'}
          </Link>
        </form>
      </div>
    </section>
  );
}

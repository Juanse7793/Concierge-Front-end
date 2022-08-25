import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Concierge from './concierge.png';
import { signOut } from '../redux/reducers/users';
import '../css/Sidebar.css';

function Sidebar() {
  const linkClass = 'pill link no-shadow';
  const [hidden, setHidden] = useState(true);
  const toggle = () => setHidden(!hidden);
  const toggleClass = (hidden) => (hidden ? 'hidden green' : 'white');

  const dispatch = useDispatch();
  const signOutHandler = () => { dispatch(signOut()); };

  return (
    <>
      <button className={`burger-div pill ${toggleClass(!hidden)}`} type="button" onClick={toggle}>
        <div className="burger top" />
        <div className="burger mid" />
        <div className="burger bot" />
      </button>
      <nav className={`column ${toggleClass(hidden)}`}>
        <img src={Concierge} alt="Concierge Logo" />
        <div className="side-bar-body column">
          <NavLink to="/" className={linkClass} onClick={toggle}>Home</NavLink>
          <NavLink to="/my-reservations" className={linkClass} onClick={toggle}>My Reservations</NavLink>
          <NavLink to="/new-event" className={linkClass} onClick={toggle}>New Event</NavLink>
          <NavLink to="/all-events" className={linkClass} onClick={toggle}>Remove Event</NavLink>
          <NavLink to="/about" className={linkClass} onClick={toggle}>About</NavLink>
          <button type="submit" className={`${linkClass} red`} onClick={signOutHandler}>Sign Out</button>
        </div>
        <footer>
          <div className="social-media">
            <GitHubIcon />
            <LinkedInIcon />
            <TwitterIcon />
          </div>
          <small>&copy; Concierge 2022</small>
        </footer>
      </nav>
    </>
  );
}

export default Sidebar;

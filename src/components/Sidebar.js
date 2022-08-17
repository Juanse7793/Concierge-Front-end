import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Concierge from './concierge.png';
import '../css/Sidebar.css';

function Sidebar() {
  const linkClass = 'pill semi prev link';
  const [hidden, setHidden] = useState(true);
  const toggle = () => setHidden(!hidden);
  const toggleClass = (hidden) => (hidden ? 'hidden' : '');

  return (
    <>
      <button className={`burger ${toggleClass(!hidden)}`} type="button" onClick={toggle}>-</button>
      <nav className={`side-bar-container column ${toggleClass(hidden)}`}>
        <img src={Concierge} alt="Concierge Logo" />
        <div className="side-bar-body column">
          <NavLink to="/" className={linkClass} onClick={toggle}>Home</NavLink>
          <NavLink to="/my-reservations" className={linkClass} onClick={toggle}>My Reservations</NavLink>
          <NavLink to="/new-event" className={linkClass} onClick={toggle}>New Event</NavLink>
          <NavLink to="/all-events" className={linkClass} onClick={toggle}>Remove Event</NavLink>
          <NavLink to="/about" className={linkClass} onClick={toggle}>About</NavLink>
          <button type="submit" className={`${linkClass} red`} onClick={toggle}>Sign Out</button>
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

import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Concierge from './concierge.png';

function Sidebar() {
  return (
    <div className="side-bar-container">
      <div className="side-bar-header">
        <img src={Concierge} alt="Concierge Logo" />
      </div>
      <div className="side-bar-body">
        <h3>Home</h3>
        <h3>Reservations</h3>
        <h3>Events</h3>
        <h3>New Event</h3>
        <h3>Remove Event</h3>
        <h3>About</h3>
        <button type="submit">Sign Out</button>
      </div>
      <div className="side-bar-footer">
        <div className="social-media">
          <GitHubIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </div>
        <p>&copy; Concierge 2022</p>
      </div>
    </div>
  );
}

export default Sidebar;

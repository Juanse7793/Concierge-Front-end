import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Concierge from './concierge.png';

function Sidebar() {
  return (
    <div className="side-bar-container column">
      <img src={Concierge} alt="Concierge Logo" />
      <div className="side-bar-body">
        <a href="/" className="body-titles"><h3>Home</h3></a>
        <a href="/" className="body-titles"><h3>My Reservations</h3></a>
        <a href="/" className="body-titles"><h3>New Event</h3></a>
        <a href="/" className="body-titles"><h3>Remove Event</h3></a>
        <a href="/" className="body-titles"><h3>About</h3></a>
        <button type="submit" className="sign-out"><h3>Sign Out</h3></button>
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

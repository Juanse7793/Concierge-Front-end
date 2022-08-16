import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Zaman from '../components/zaman.png';
import Juan from '../components/juan.png';
import Tafara from '../components/tafara.png';
import Concierge from '../components/concierge.png';

function AboutPage() {
  return (
    <div className="about-main-container">
      <div className="about-header">
        <img src={Concierge} alt="Concierge Logo" />
      </div>
      <div className="about-header-body">
        <h1>About Concierge</h1>
        <p>
          {' '}
          Concierge is a web application that allow you to: lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Donec euismod, nisi eget
          consectetur consectetur, nisi nisi consectetur, nisi nisi consectetur,
          nisi nisi consectetur, nisi nisi consectetur, nisi nisi consectetur,
          nisi nisi consectetur, nisi nisi consectetur, nisi nisi consectetur,
          nisi nisi consectetur, nisi nisi consectetur, nisi nisi consectetur,
          nisi nisi consectetur, nisi nisi consectetur,
        </p>
        <div className="authors-div">
          <h2>Authors</h2>
          <div className="authors-div-body">
            <div className="authors-div-body-item">
              <h3>Juan Sebastian Sotomayor</h3>
              <img src={Juan} alt="Concierge Logo" />
              <p>web developer and designer.</p>
              <GitHubIcon />
              <LinkedInIcon />
              <TwitterIcon />
            </div>
            <div className="authors-div-body-item">
              <h3>Tafara Mafemba</h3>
              <p>Jane Doe is a web developer and designer.</p>
              <img src={Tafara} alt="Concierge Logo" />
              <GitHubIcon />
              <LinkedInIcon />
              <TwitterIcon />
            </div>
            <div className="authors-div-body-item">
              <h3>Zaman Humaira</h3>
              <p>John Doe is a web developer and designer.</p>
              <img src={Zaman} alt="Concierge Logo" />
              <GitHubIcon />
              <LinkedInIcon />
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Sidebar from '../components/Sidebar';
import Zaman from '../components/zaman.png';
import Juan from '../components/juan.png';
import Tafara from '../components/tafara.png';

function AboutPage() {
  return (
    <div className="row">
      <Sidebar />
      <div className="about-main-container">
        <div className="about-header-body">
          <h1>About Concierge</h1>
          <p className="about-text">
            {' '}
            Concierge is a web application that allow you to: lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Donec euismod, nisi eget
            consectetur consectetur, nisi nisi consectetur, nisi nisi
            consectetur, nisi nisi consectetur, nisi nisi consectetur, nisi nisi
            consectetur, nisi nisi consectetur, nisi nisi consectetur, nisi nisi
            consectetur, nisi nisi consectetur, nisi nisi consectetur, nisi nisi
            consectetur, nisi nisi consectetur, nisi nisi consectetur,
          </p>
          <div className="authors-div">
            <h2>Authors</h2>
            <div className="authors-div-body">
              <div className="authors-div-body-item">
                <h3>Juan Sebastian Sotomayor</h3>
                <img src={Juan} alt="Concierge Logo" />
                <p>Web developer and Mechatronic Engineer.</p>
                <a className="about-icons" href="https://github.com/Juanse7793" target="_blank" rel="noreferrer">
                  <GitHubIcon />
                </a>
                <a className="about-icons" href="https://www.linkedin.com/in/juansebastiansotomayor/" target="_blank" rel="noreferrer">
                  <LinkedInIcon />
                </a>
                <a className="about-icons" href="https://twitter.com/Juanse77930" target="_blank" rel="noreferrer">
                  <TwitterIcon />
                </a>
              </div>
              <div className="authors-div-body-item">
                <h3>Tafara Mafemba</h3>
                <img src={Tafara} alt="Concierge Logo" />
                <p>Web developer and designer.</p>
                <GitHubIcon />
                <LinkedInIcon />
                <TwitterIcon />
              </div>
              <div className="authors-div-body-item">
                <h3>Zaman Humaira</h3>
                <img src={Zaman} alt="Concierge Logo" />
                <p>Web developer and designer.</p>
                <GitHubIcon />
                <LinkedInIcon />
                <TwitterIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

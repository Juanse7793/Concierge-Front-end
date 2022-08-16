import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';
import EventsPage from './pages/EventsPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/events/:id" element={<DetailsPage />} />
          <Route exact path="all-events" element={<EventsPage />} />
          <Route exact path="log-in" element={<Login />} />
          <Route exact path="sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

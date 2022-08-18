import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';
import EventsPage from './pages/EventsPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ReservePage from './pages/ReservePage';
import AddEvent from './components/AddEvent';
import ReservationsPage from './components/ReservationsPage';
import AboutPage from './pages/AboutPage';

function App() {
  const { signedIn } = useSelector((state) => state.user);
  return (
    <div className="App">
      <Router>
        <Routes>
          { !signedIn ? (
            <>
              <Route exact path="sign-up" element={<SignUp />} />
              <Route path="*" element={<Login />} />
            </>
          ) : (
            <>
              <Route exact path="/" element={<MainPage />} />
              <Route path="/events/:id" element={<DetailsPage />} />
              <Route exact path="all-events" element={<EventsPage />} />
              <Route exact path="/events/:id" element={<DetailsPage />} />
              <Route path="/events/:id/reserve" element={<ReservePage />} />
              <Route exact path="/all-events" element={<EventsPage />} />
              <Route path="/new-event" element={<AddEvent />} />
              <Route path="/my-reservations" element={<ReservationsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/*" element={<MainPage />} />
            </>
          ) }
        </Routes>
      </Router>
    </div>
  );
}

export default App;

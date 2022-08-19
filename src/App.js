import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';
import EventsPage from './pages/EventsPage';
import Login from './pages/Login';
import ReservePage from './pages/ReservePage';
import AddEvent from './pages/AddEvent';
import ReservationsPage from './pages/ReservationsPage';
import AboutPage from './pages/AboutPage';
import Sidebar from './components/Sidebar';

function App() {
  const { signedIn } = useSelector((state) => state.user);
  return (
    <div className="App row">
      <Router>
        { signedIn ? <Sidebar /> : null }
        <Routes>
          { !signedIn ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          ) : (
            <>
              <Route exact path="/" element={<MainPage />} />
              <Route path="/events/:id" element={<DetailsPage />} />
              <Route path="/events/:id/reserve" element={<ReservePage />} />
              <Route path="/new-event" element={<AddEvent />} />
              <Route path="/all-events" element={<EventsPage />} />
              <Route path="/my-reservations" element={<ReservationsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/*" element={<Navigate to="/" replace />} />
            </>
          ) }
        </Routes>
      </Router>
    </div>
  );
}

export default App;

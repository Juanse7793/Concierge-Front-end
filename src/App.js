import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';
import EventsPage from './pages/EventsPage';
import ReservePage from './pages/ReservePage';
import AddEvent from './components/AddEvent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/events/:id" element={<DetailsPage />} />
          <Route path="/events/:id/reserve" element={<ReservePage />} />
          <Route exact path="/all-events" element={<EventsPage />} />
          <Route path="/new-event" element={<AddEvent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

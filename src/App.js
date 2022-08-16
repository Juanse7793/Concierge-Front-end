import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';
import EventsPage from './pages/EventsPage';
import ReservePage from './pages/ReservePage';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App row">
      <Sidebar />
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/events/:id" element={<DetailsPage />} />
          <Route path="/events/:id/reserve" element={<ReservePage />} />
          <Route exact path="/all-events" element={<EventsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';
import ReservePage from './pages/ReservePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/events/:id" element={<DetailsPage />} />
          <Route path="/events/:id/reserve" element={<ReservePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';  // Import the LoginPage
// import Browse from './pages/Browse';
// import Playlist from './pages/Playlist';
// import Search from './pages/Search';
import './App.css';  // Updated styles

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for Home page */}
          <Route path="/login" element={<LoginPage />} /> {/* Route for Login page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

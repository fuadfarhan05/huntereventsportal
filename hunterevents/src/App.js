import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/homepage';
import Page from './pages/form';



function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <Link to="/home">Home</Link>
        <Link to="/page">Page</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;

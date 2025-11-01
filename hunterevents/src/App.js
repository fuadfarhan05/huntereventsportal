import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/homepage';
import Form from './pages/form';
import SignIn from './pages/signin';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Routes with Layout (includes Navbar) */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Route>

        {/* Routes without Layout */}
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;

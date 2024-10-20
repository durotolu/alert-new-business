import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddBusinessForm from './components/AddBusinessForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-business" element={<AddBusinessForm />} />
      </Routes>
    </Router>
  );
};

export default App;

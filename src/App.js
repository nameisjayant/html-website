import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OpenApp from './OpenApp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OpenApp />} />
      </Routes>
    </Router>
  );
};

export default App;
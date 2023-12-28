// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import YourFormComponent from './formcomponent';
import DisplayRecords from './Data';
import Login from './Login';

const App = () => {

  return (
    <Router>
      <div>
      
        <Routes>
        <Route path="/" element={<YourFormComponent />} />
        <Route path="/adminlogin" element={<Login />} />
        
        <Route path="/display" element={<DisplayRecords />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

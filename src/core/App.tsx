import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/app/page1" element={<Page1 />} />
        <Route path="/app/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
};

export default App;

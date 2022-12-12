import React from 'react';
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

const Layout = () => {

  return (
    <Router>
    <div className="Layout">
      <div className="Content">
        <Routes>
          <Route path='/'element={<Dashboard/>}/> 
        </Routes>
      </div>
    </div>
  </Router>
  )
};

export default Layout;
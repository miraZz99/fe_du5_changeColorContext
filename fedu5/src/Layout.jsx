import React from 'react';
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './Home';
const Layout = () => {

  return (
    <Router>
    <div className="Layout">
      <div className="Content">
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/dashboard'element={<Dashboard/>}/> 
        </Routes>
      </div>
    </div>
  </Router>
  )
};

export default Layout;
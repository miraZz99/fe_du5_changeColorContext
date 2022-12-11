import React from 'react';
import Populace from "./Populace";
import Umrti from './Umrti';
import Narozeni from './Narozeni';


const Dashboard = () => {
  return (
    <div className="grafy" align="center">
      <div className="charts">
          <Populace/>
          <Narozeni/>
          <Umrti/>
      </div>
    </div>
  )
}

export default Dashboard;
import React from 'react';
import Populace from "./Populace";
import Umrti from './Umrti';
import Narozeni from './Narozeni';
import { useContext } from 'react';
import ColorSchema from './ColorSchema';


const Dashboard = () => {
  const colors = useContext(ColorSchema);
  return (
    <div className="grafy" align="center">
      <div style={(colors)} className="charts">
          <Populace/>
          <Narozeni/>
          <Umrti/>
      </div>
    </div>
  )
}

export default Dashboard;
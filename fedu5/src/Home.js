import React from 'react';
import { useContext } from 'react';
import ColorSchema from './ColorSchema';


const Home = () => {
  const colors = useContext(ColorSchema);
  return (
    <div style={(colors)} className="home" align="center">
      <h1>WELCOME</h1>
    </div>
  )
}

export default Home;
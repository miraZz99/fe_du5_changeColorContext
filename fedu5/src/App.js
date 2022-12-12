import React, {useState} from 'react';
import Layout from './Layout';
import Navbar from './Navbar';
import ColorSchema, { colors } from './ColorSchema';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CircleIcon from '@mui/icons-material/Circle';


function App() {
  const [color, setColor] = useState(colors.blue);
  const setBlue = () => 
      color === colors.blue ? setColor(colors.blue) : setColor(colors.blue);
  const setDark = () => 
      color === colors.blue ? setColor(colors.dark) : setColor(colors.blue);
  const setGreen = () => 
      color === colors.blue ? setColor(colors.green) : setColor(colors.blue);
  
  return (
      <ColorSchema.Provider value={color}>
        <Navbar/>
        <Stack direction="row" spacing={1} marginRight={100}>
          <IconButton aria-label="circleIcon" style={{color: '#6ad0fc'}}>
            <CircleIcon onClick={setBlue} />
          </IconButton>
          <IconButton aria-label="circleIcon" style={{color: "#484a4a"}}>
            <CircleIcon onClick={setDark} />
          </IconButton>
          <IconButton aria-label="circleIcon" style={{color: "#b2f7c2"}}>
            <CircleIcon onClick={setGreen} />
          </IconButton>
        </Stack>
        <Layout/>
      </ColorSchema.Provider>
  );
}

export default App;

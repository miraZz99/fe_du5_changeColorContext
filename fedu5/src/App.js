import Navbar from './Navbar';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content">
          <Routes>
            <Route path='/'element={<Dashboard/>}/> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

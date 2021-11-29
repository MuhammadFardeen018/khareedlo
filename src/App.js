import './App.css';
import Navbar from './Components/Navbar.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home.js';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
      </Routes>
      

      </Router>
      
    </div>
  );
}

export default App;

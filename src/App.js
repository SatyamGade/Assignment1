import './App.css';
import First from './components/First';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
import Instructions from './components/Instructions';
import Reviews from './components/Reviews';

function App() {
  return (
    <>
      <Router>
        <First/>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/instructions" element={<Instructions />} />
        </Routes>
        <Routes>
          <Route exact path="/reviews" element={<Reviews />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

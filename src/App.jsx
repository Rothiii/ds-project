import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import Mailing from './components/Mailing';
import Article from './components/Article';
import Perjanjian from './pages/Perjanjian';
import About from './pages/About';
import HtgtPage from './components/howToGetThere/HtgtPage';
import FlightPage from './components/flights/FlightPage';
import Ttd from './components/Thing/Ttd';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-in-touch" element={<Mailing />} />
        <Route path="/article" element={<Article />} />
        <Route path="/pledge" element={<Perjanjian />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-to-get-there" element={<HtgtPage />} />
        <Route path="/flights-to-balikpapan" element={<FlightPage />} />
        <Route path="/ThingsToDo" element={<Ttd />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

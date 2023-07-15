import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Simple from './components/Simple';
import Binary from './components/Binary';
import Start from './components/Start';

function App() {
  return (
    <>
      <Router>
        <Navbar topic="My Calci" />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/simpleCalculator" element={<Simple />} />
          <Route path="/binaryCalculator" element={<Binary />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

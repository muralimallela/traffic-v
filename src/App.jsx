
import './App.css';
import Sidebar from './components/dashboard/Sidebar';
// import Sidebar from './components/Sidebar';
// import Home from './components/Home';
import Accident from './components/Accident'
import Traffic from './components/Traffic';
import Voilation from './components/Voilation';
import Ambulance from './components/Amdulance';
import Navbar from './components/dashboard/Navbar';
import ScreenWidthComponent from './components/dashboard/ScreenWidthComponent'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>\
        <Navbar/>
        <Sidebar/>
        <Routes>
          <Route path="/Accident" element={<Accident />} />
          <Route path="/Traffic" element={<Traffic />} />
          <Route path="/Ambulence" element={<Ambulance />} />
          <Route path="/Voilation" element={<Voilation />} />
          <Route path="/dashboard" element={<ScreenWidthComponent />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

import './App.css';
import logAnalytics from './analytics/FirebaseAnalytics.js'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'

function App() {
  logAnalytics("page_render_main")

  return (
    <div className="App">
      <BrowserRouter>
        {/* Links! */}
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/about-us" element={<AboutUs />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

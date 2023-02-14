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
        <div className='App-header'>
          <h2 className='App-title'>
            Adriana and Stephen's Wedding!
          </h2>
          <nav className="App-navbar">
            <Link to="/" className='App-link'>Home</Link>
            <Link to="/about-us" className='App-link'>About Us</Link>
          </nav>
        </div>

        <Routes>
          <Route exact path="/" element={<Homepage />}/>
          <Route exact path="/about-us" element={<AboutUs />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

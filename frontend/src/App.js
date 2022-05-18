//import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
//import Home from './components/Home';
import About from './components/About';
import AdminDashboard from './pages/AdminDashboard';
import GuardianDashboard from './pages/GuardianDashboard';
function App() {
  const [userType, setUserType] = useState("admin");
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/about">About</Link>{' '}
          <Link to="/signin">Sign In</Link>{' '}
        </nav>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header> */}
        <Routes>
          {userType === "admin" ? <Route path="/" element={<AdminDashboard />} /> : <Route path="/" element={<GuardianDashboard />} />}
          <Route path="about" element={<About />} />
          <Route path="signin" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

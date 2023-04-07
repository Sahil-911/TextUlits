// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1d2633';
      document.body.style.color = 'white';
      showAlert('Darkmode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Lightmode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode'
    }
  }

  const hackMode = () => {
    if (mode === 'hack') {
      setMode('black');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
      showAlert('Hackmode has been enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Hackmode has been disabled', 'success');
    }
  }
  return (
    // JSX is basically HTML, and we can use {} in JSX to use JS
    <>
      <Router>
        <Navbar title="TextUtils" About="About" address="Branches" first="Pal" second="Adajan" mode={mode} toggleMode={toggleMode} hackMode={hackMode} />
        {/* Here we are passing props to Navbar component, and we can use them in Navbar component */}
        {/* <Navbar title="New navbar" About="About new navbar" /> */}
        {/* <Navbar />   */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your Text to work on" mode={mode} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
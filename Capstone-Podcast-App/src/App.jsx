import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import NavBar from './components/Navbar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>  
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Routes>
    </Router>
  );
}

export default App;

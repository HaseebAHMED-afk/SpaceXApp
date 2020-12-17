import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import MainNav from './Components/MainNav/MainNav';
import TopNav from './Components/TopNav/TopNav';

function App() {
  return (
    <div className="App">
      <Router>
      <TopNav />
      <MainNav />
      </Router>
    </div>
  );
}

export default App;

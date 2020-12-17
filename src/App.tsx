import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import LaunchPage from './Components/Launch/LaunchPage';
import LaunchInfoPage from './Components/LaunchInfo/LaunchInfoPage';
import TopNav from './Components/TopNav/TopNav';

function App() {
  return (
    <div className="App">
      <Router>
      <TopNav />
      {/* <LaunchPage />
      <LaunchInfoPage /> */}
      
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import LaunchPage from "./Components/Launch/LaunchPage";
import LaunchInfoPage from "./Components/LaunchInfo/LaunchInfoPage";
import MainNav from "./Components/MainNav/MainNav";
import RocketInfoPage from "./Components/RocketInfo/RocketInfoPage";
import RocketPage from "./Components/Rockets/RocketPage";
import ShipInfoPage from "./Components/ShipInfo/ShipInfoPage";
import ShipsPage from "./Components/Ships/ShipsPage";
import TopNav from "./Components/TopNav/TopNav";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav />
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launches" element={<LaunchPage />} ></Route>
          <Route path="/launches/:flight_number" element={<LaunchInfoPage />} /> 
          <Route path="/rockets" element={<RocketPage />} />
          <Route path="/rockets/:id" element={<RocketInfoPage />}  />
          <Route path="/ships" element={<ShipsPage />} />
          <Route path="/ships/:id" element={<ShipInfoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

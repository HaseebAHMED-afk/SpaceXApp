import React from 'react'
import './MainNav.css'
import { Link, Route, Routes } from 'react-router-dom'
import LaunchPage from '../Launch/LaunchPage'

const MainNav = () => {
    return (
        <div className="main-nav">
            <Link to="/launches">Launches</Link>
            
            <Routes>
                <Route path="/launches" element={<LaunchPage />} />
            </Routes>
        </div>
    )
}

export default MainNav

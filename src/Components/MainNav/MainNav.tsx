import React from 'react'
import './MainNav.css'
import { Link } from 'react-router-dom'

const MainNav = () => {
    return (
        <div className="main-nav">
            <Link to="/" ><p>Home</p></Link>
            <Link to="/launches"><p>Launches</p></Link>
            <Link to="/rockets"><p>Rockets</p></Link>
            <Link to="/ships"><p>Ships</p></Link>
            
        </div>
    )
}

export default MainNav

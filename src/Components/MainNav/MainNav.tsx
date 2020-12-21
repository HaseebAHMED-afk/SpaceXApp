import React from 'react'
import './MainNav.css'
import { Link } from 'react-router-dom'

const MainNav = () => {
    return (
        <div className="main-nav">
            <Link className="nav-link" to="/" ><p>Home</p></Link>
            <Link className="nav-link" to="/launches"><p>Launches</p></Link>
            <Link className="nav-link" to="/rockets"><p>Rockets</p></Link>
            <Link className="nav-link" to="/ships"><p>Ships</p></Link>
            
        </div>
    )
}

export default MainNav

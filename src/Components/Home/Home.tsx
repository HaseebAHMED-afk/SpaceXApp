import React from 'react'
import { Button } from '@material-ui/core'
import './Home.css'

const Home = () => {
    return (
        <div>
            <img className="spacex-img" src="https://www.teslarati.com/wp-content/uploads/2019/06/Starlink-coverage-Earth-SpaceX-2-crop.jpg" alt="spacex-img" />
            <div className="second-div">
                <Button variant="contained" className="btn">See The Launch</Button>
            </div>
        </div> 
    )
}

export default Home

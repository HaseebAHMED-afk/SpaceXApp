import React from 'react'
import { Button } from '@material-ui/core'
import './Home.css'
import Footer from '../Utils/Footer/Footer'

const Home : React.FC = () => {


   
    return (
        <div>
            <img className="spacex-img" src="https://www.teslarati.com/wp-content/uploads/2019/06/Starlink-coverage-Earth-SpaceX-2-crop.jpg" alt="spacex-img" />
            <div className="second-div">
                <Button variant="contained" className="btn">See The Launch</Button>
            </div>
            <div className="card-deck">
            <div className="card">
                <img src="https://cnet1.cbsistatic.com/img/2ZjmzrycBZQD9Dpnt_EnfQ7TTro=/940x0/2020/05/31/5112f3db-5af6-431c-bc0d-a8108ccad2ee/spacex-falcon-9-launch.jpg" className="card-img" alt="card-img" />
                <div className="card-detail">
                    <h1 className="card-heading">Launches</h1>
                    <p className="card-para">See all of SpaceX's launches into space</p>
                    <Button variant="contained" className="link-btn">View</Button>
                </div>
            </div>

            <div className="card">
                <img src="https://hips.hearstapps.com/pop.h-cdn.co/assets/17/30/1501012342-pmx090117-falconheavy01.jpg?crop=1.00xw:0.492xh;0,0.209xh&resize=480:*" className="card-img" alt="card-img" />
                <div className="card-detail">
                    <h1 className="card-heading">Rockets</h1>
                    <p className="card-para">View all rockets that SpaceX uses</p>
                    <Button variant="contained" className="link-btn">View</Button>
                </div>
            </div>

            <div className="card">
                <img src="https://cdn.vox-cdn.com/thumbor/PCABXCkc8mm7G63iLECRcQBmA-I=/0x0:3840x2560/1200x800/filters:focal(1613x973:2227x1587)/cdn.vox-cdn.com/uploads/chorus_image/image/62194005/GO_SEARCHER_HELO_LANDING_20181018_Helicopter_Landing_Test_2018_10_19_291_9_.0.jpg" className="card-img" alt="card-img" />
                <div className="card-detail">
                    <h1 className="card-heading">SpaceX Fleet</h1>
                    <p className="card-para">View all the boats & vehicles part of SpaceX Offshore Recovery System </p>
                    <Button variant="contained" className="link-btn">View</Button>
                </div>
            </div>
            </div>
            <div className="dragon-sim">
                <div className="heading-section" >
                <h1 className="dgs-heading">SpaceX Dragon 2 Simulator</h1>
                <p className="dgs-para">Dock the SpaceX Dragon 2 Satellite to the International Space Station in this realtime simulator with the controls our astronauts use on their missions.</p>
                <Button variant='outlined' className="dgs-btn"><a href="https://iss-sim.spacex.com/">Try Now</a></Button>
                </div>
            </div>
            <Footer />     
        </div> 
    )
}

export default Home

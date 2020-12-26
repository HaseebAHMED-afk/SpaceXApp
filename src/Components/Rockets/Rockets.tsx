import React from 'react'
import { Link } from 'react-router-dom'
import { RocketsQuery } from '../../generated/graphql'
import Footer from '../Utils/Footer/Footer'
import './Rockets.css'

interface Props {
    data?: RocketsQuery
}

const Rockets: React.FC<Props> = ({data}) => {
    return (
        <div className="rocket">
            <h1>Rockets</h1>
            <p>The spectacular marvel of engineering that allow SpaceX to fullfil its vision</p>
            <div className="rocket-card-deck">
                
            {
                !!data?.rockets && data?.rockets.map((rocket,i) => (
                    <div className="rocket-card" key={i}>
                       {
                           rocket?.flickr_images ? <img className="rocket-img" src={`${rocket.flickr_images[0]}`} alt=""/> : null
                       }
                    <h2 className="rocket-name" >{rocket?.rocket_name}</h2>
                    <p className="rocket-status">{rocket?.active}</p>
                    <Link to={`/rockets/${rocket?.rocket_id}`} ><button className="rocket-viewmore-btn" >View More</button></Link>
                    
                </div>
                ))
            }
            </div>
            <Footer />
        </div>
    )
}

export default Rockets

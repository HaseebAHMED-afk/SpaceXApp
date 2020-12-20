import React from 'react'
import { LaunchesQuery } from  '../../generated/graphql'
import './Launch.css'

interface Props {
    data: LaunchesQuery,
}

const Launch: React.FC<Props> = ({data}) => {


    return (
        <div className="launches">
            <div className="heading-section">
            <h1 className="main-heading">SpaceX Launches</h1>
            <p className="main-para">See the launches that describe SpaceX's journey to the great beyond</p>
            </div>

            <div className="launch-deck">

            {!!data.launches && data.launches.map(
                    (launch,i) => !!launch && 
                     (
                        <div  key={i} className="launch-card">
                        <h2 className="launch-name">{launch.mission_name}</h2>
                       <p className="launch-year">{launch.launch_year}</p>
                      <p className="launch-success" >{launch.launch_success ? "Success" : (launch.launch_success === false ? "Failed" : "Upcoming")}</p>
                </div>
                    )
                )}

                
            </div>

        </div>
    )
}

export default Launch 

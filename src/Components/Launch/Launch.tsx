import React from 'react'
import { LaunchesQuery } from  '../../generated/graphql'
import './Launch.css'

interface Props {
    data: LaunchesQuery,
}

const Launch: React.FC<Props> = ({data}) => {
    return (
        <div className="Launches">
            <h3>SpaceX Launches</h3>
            <ol className="launches-ol">
                {!!data.launches && data.launches.map(
                    (launch,i) => !!launch && 
                     (
                        <li key={i} className="launch-item">
                            <h1>{launch.mission_name}</h1>
                            <p>{launch.launch_year}</p>
                            <p>{launch.launch_success}</p>
                        </li>
                    )
                )}
            </ol>
        </div>
    )
}

export default Launch 

import React from 'react'
import { LaunchInfoQuery } from '../../generated/graphql'
import './LaunchInfo.css'

interface Props {
    data: LaunchInfoQuery
}

const LaunchInfo: React.FC<Props> = ({data}) => {

    if(!data.launch){
        return <div>No data available</div>
    }

    return (
        <div>
            <h1>{data.launch.mission_name}</h1>
            <p>{data.launch.launch_date_utc}</p>
            <p>{data.launch.launch_success}</p>
            <p>{data.launch.launch_site?.site_name_long}</p>
            <p>{data.launch.launch_year}</p>
            <p>{data.launch.rocket?.rocket_name}</p>
        </div>
    )
}

export default LaunchInfo

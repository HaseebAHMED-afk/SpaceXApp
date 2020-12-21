import React from 'react'
import { useParams } from 'react-router-dom'
import LaunchContainerDetails from './index'

const LaunchInfoPage = () => {

    let {mission} = useParams();

    console.log(mission);
    

    return (
        <div>
            {LaunchContainerDetails()}
        </div>
    )
}

export default LaunchInfoPage

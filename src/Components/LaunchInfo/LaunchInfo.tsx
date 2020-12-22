import React from 'react'
import { LaunchInfoQuery } from '../../generated/graphql'
import Success from '../Utils/Success/Success'
import Failure from '../Utils/Failure/Failure'
import Upcoming from '../Utils/Upcoming/Upcoming'
import './LaunchInfo.css'

interface Props {
    data: LaunchInfoQuery
}



const LaunchInfo: React.FC<Props> = ({data}) => {


    if(!data.launch){
        return <div>No data available</div>
    }

   

    return (
        <div className="launch-info">
             {/* <video width="320" height="240" controls >
                   <source src={`${data.launch.links.video_link}`} /> 
               </video> */}
            <h1 className="launchinfo-heading" >{data.launch.mission_name}</h1>
            <p className="launchinfo-date" >{data.launch.launch_date_utc}</p>
            <p className="launchinfo-success" >{data.launch.launch_success ? <Success /> : (data.launch.launch_success === false ? <Failure /> : <Upcoming />)}</p>
            <p className="launchinfo-site" >{data.launch.launch_site?.site_name_long}</p>
            <p className="launchinfo-year" >{data.launch.launch_year}</p>
            <p className="launchinfo-rocket" >{data.launch.rocket?.rocket_name}</p>
           {
               data.launch.links?.flickr_images?.length !== 0 ? (<>
                {
                    data.launch.links?.flickr_images?.map((image , i) => <img key={i} src={`${image}`} alt="img" /> )
                }
               </>) : <img src="https://cdn.images.express.co.uk/img/dynamic/151/590x/spacex-launch-today-how-to-see-spacex-starlink-uk-tonight-1301292.jpg?r=1593156651221" alt="img" />
           }
        </div>
    )
}

export default LaunchInfo



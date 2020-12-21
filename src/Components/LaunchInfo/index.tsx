import React from 'react';
import { useLaunchInfoQuery } from '../../generated/graphql'
import LaunchInfo from './LaunchInfo';

const LaunchContainerDetails = () =>{
    
    
    const {data,error,loading} = useLaunchInfoQuery({variables:{id : `13`}});

    if(loading){
        return <div>Data is Loading</div>
    }

    if(error){
        return <div>Error</div>
    }

    if(!data){
        return <div>Please seleact a mission</div>
    }

    if(data){
        return <LaunchInfo data={data} />
    }
}

export default LaunchContainerDetails;
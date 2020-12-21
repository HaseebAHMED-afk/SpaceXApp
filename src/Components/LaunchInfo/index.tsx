import React from 'react';
import { useParams } from 'react-router-dom';
import { useLaunchInfoQuery } from '../../generated/graphql'
import LaunchInfo from './LaunchInfo';

const LaunchContainerDetails = () =>{

    let {mission} = useParams();

    const {data,error,loading} = useLaunchInfoQuery({variables:{id : mission}});

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
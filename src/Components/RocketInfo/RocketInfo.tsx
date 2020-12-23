import React from 'react'
import { RocketInfoQuery } from '../../generated/graphql'
import './RocketInfo.css'

interface Props{
    data: RocketInfoQuery
}

const RocketInfo: React.FC<Props> = ({data}) => {
    return (
        <div className="rocket-info" >
            <h1>{data.rocket?.rocket_name}</h1>
        </div>
    )
}

export default RocketInfo

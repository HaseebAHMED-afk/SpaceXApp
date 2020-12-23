import React from 'react'
import { RocketInfoQuery } from '../../generated/graphql'
import Active from '../Utils/Active/Active'
import Footer from '../Utils/Footer/Footer'
import InActive from '../Utils/InActive/InActive'
import './RocketInfo.css'

interface Props{
    data: RocketInfoQuery
}

const RocketInfo: React.FC<Props> = ({data}) => {
    return (
        <div className="rocket-info" >
            <h1 className="rocket_name" >Name: {data.rocket?.rocket_name}</h1>
            <hr className="separate-line"/>
            <h1 className="rocket-manufacture" >Manufacturer: {data.rocket?.company}</h1>
            <hr className="separate-line"/>
            <h1 className="rocket-country" >Country: {data.rocket?.country}</h1>
            <hr className="separate-line"/>
            <h1 className="rocket-cost" >Cost: $ {data.rocket?.cost_per_launch}</h1>
            <hr className="separate-line"/>
            <h1 className="rocket-type" >Rocket Type: {data.rocket?.rocket_type}</h1>
            <hr className="separate-line"/>
            <h1 className="rocket-engine-type" >Rocket Engine: {data.rocket?.engines?.type}</h1>
            <hr className="separate-line"/>
            <h1 className="rocket-engine-version" >Engine Version: {data.rocket?.engines?.version}</h1>
            <hr className="separate-line"/>
            <h1 className="first-flight" >First Flight: {data.rocket?.first_flight}</h1>
            <hr className="separate-line"/>
            <h1 className="rocket-height" >Rocket Height: {data.rocket?.height?.meters} meters</h1>
            <hr className="separate-line"/>
            <h1 className="rocket-status" >Rocket Status: {data.rocket?.active === true ? <Active /> : <InActive /> }</h1>
            <hr className="separate-line"/>
            <h1 className="rocket-description">Description:</h1>
            <p className="rocket-description" >Description: {data.rocket?.description}</p>
            <hr className="separate-line"/>
            <h1 className="gallery-heading" >Gallery</h1>
            {
                data.rocket?.flickr_images?.length !==0 ? (
                    <>
                    {
                        data.rocket?.flickr_images?.map((img,i) => (<img className="rocket-images" key={i} src={`${img}`} alt="img" />))
                    }
                    </>
                ) : <p className="not-found" >No Images Found</p>
            }
            <Footer />
        </div>
    )
}

export default RocketInfo

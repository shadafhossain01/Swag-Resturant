import React from 'react'
import { resPicture } from '../utils/common'
import { MdStarRate } from "react-icons/md";

const ResturantCard = (props) => {
    const {cloudinaryImageId,costForTwo,cuisines,name,externalRatings,sla}=props.data.info
    const random = (Math.random() * (5 - 3) + 3).toFixed(1);
  return (
    <>
        <div className='resCard'>
        <img src={`${resPicture}${cloudinaryImageId}`} />
        <h4>{name}</h4>
        <p>{cuisines.join(", ")}</p>
        <h4> Delivery Time : {sla.deliveryTime} minutes</h4>
        <div className='rateDiv'>
            <button className={`${externalRatings.aggregatedRating.rating >3.5 ? "greenBtn" : "redBtn"}`} > <MdStarRate/> {externalRatings.aggregatedRating.rating=="--" ? random : externalRatings.aggregatedRating.rating}</button>
            <span>{costForTwo}</span>
        </div>
        </div>
    </>
  )
}

export default ResturantCard
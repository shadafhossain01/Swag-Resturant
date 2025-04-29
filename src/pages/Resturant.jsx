import React, { useEffect, useState } from 'react'
import { MdStarRate } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'
import { resPicture } from '../utils/common'

const Resturant = () => {

const [resData,setResData]=useState()
const {id}=useParams()
const navigate=useNavigate();

    useEffect(()=>{
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const fetchData=async()=>{
        const data=await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+id)
        const res= await data.json()
        setResData(res.data.cards[2].card.card.info);
    }

    if(!resData) return (
        <div className='container'>
            <div className='shimmer-res'>
            <h2>Loading...</h2>
            </div>
        </div>
    )
    const {cloudinaryImageId, avgRating,costForTwoMessage,cuisines,name,totalRatingsString}=resData

    const handleBack=()=>{
        return navigate(-1);
    }

  return (
    <div className='container'>
    <div className='resDiv'>
    <img src={`${resPicture}${cloudinaryImageId}`}/>
    <div>
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <div className='sidebySide'>
        <button className={`${avgRating >3.5 ? "darkBtn" : "redBtn"}`} > <MdStarRate/> {avgRating=="--" ? 4.0 : avgRating}</button>
        <h6>{totalRatingsString}</h6>
        <h6>{costForTwoMessage}</h6>
        </div>
    </div>
    </div>
    <button className='backBtn' onClick={handleBack}>Go Back</button>
    </div>
  )
}

export default Resturant
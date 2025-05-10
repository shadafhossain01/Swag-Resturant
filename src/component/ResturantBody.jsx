import React, { useEffect, useState } from 'react'
import { url } from '../utils/common';
import ResturantCard from './ResturantCard';
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";

const ResturantBody = () => {
    const [resData,setResData]=useState([])
    const [filterData,setFilterData]=useState([])
    const [inputValue, setInputValue]=useState("")

    const fetchData=async()=>{
        const res=await fetch(url);
        const data =await res.json();
        const resList=data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setResData(resList) 
        setFilterData(resList)
    }

    useEffect(()=>{
        fetchData();
    },[])

    function handleTopRated(){
        let newData=resData.filter((item)=>Number(item.info.externalRatings.aggregatedRating.rating)>4)
        setFilterData(newData)
    }

    
    useEffect(()=>{
        const filterRes=resData?.filter((item)=>item?.info?.name?.toLowerCase().includes(inputValue?.toLowerCase()))
        setFilterData(filterRes)
    },[inputValue,resData])

       if(resData?.length==0){
            return <Shimmer/>
       }

  return (
    <>
        <div className='container'>
        <div className='search-box'>
        <input type='text' placeholder='Search a Resturant you want... ' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={handleTopRated}> Top Rated Resturant </button>
        </div>
        <div className='resturant-cards'>
        {

         filterData?.length>0 ?(filterData?.map((res)=>(
                <Link key={res.info.id} to={"/resturant/"+res.info.id}>
                <ResturantCard data={res} />
                </Link>
            ))) : (<h2 className='errorText'>Sorry, we couldn't find any results for "{inputValue}"</h2> )
        
        }
        </div>
        </div>
    </>
  )
}

export default ResturantBody
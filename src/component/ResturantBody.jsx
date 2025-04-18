import React, { useEffect, useState } from 'react'
import { url } from '../utils/common';
import ResturantCard from './ResturantCard';

const ResturantBody = () => {
    const [resData,setResData]=useState([])
    const [filterData,setFilterData]=useState([])
    const [inputValue, setInputValue]=useState("")

    const fetchData=async()=>{
        const res=await fetch(url);
        const data =await res.json();
        const resList=data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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
            let searchRest=resData.filter((item)=>item.info.name.toLowerCase().includes(inputValue.toLowerCase()))
        setFilterData(searchRest)
        },[inputValue,resData])


  return (
    <>
        <div className='container'>
        <div className='search-box'>
        <input type='text' placeholder='Search a Resturant you want... ' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={handleTopRated}> Top Rated Resturant </button>
        </div>
        <div className='resturant-cards'>
        {
            filterData.map((res)=>(
                <ResturantCard data={res} key={res.info.id} />
            ))
        
        }
        </div>
        </div>
    </>
  )
}

export default ResturantBody
import React, { useState } from 'react'
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { resPicture } from '../utils/common';

const ResturantDetail = ({data}) => {

 const [showIndex,setShowIndex]=useState(null)

 const handleShow=(idx)=>{
    setShowIndex(showIndex==idx?null:idx)
 }

  return (
    <div className='res-detail'>
    {
        data.map((item,idx)=>(
            <div className='accordian'key={item.card.card.categoryId}>
    <div className='accordian-header' onClick={()=>handleShow(idx)}>
        <h3>{item.card.card.title} - ({item.card.card.itemCards.length})</h3>
        <FaRegArrowAltCircleDown/>
    </div>
    <div className='accordian-body'>
      { showIndex==idx &&
        item.card.card.itemCards.map((value)=>(
            <div key={value.card.info.id} className='single-body'>
                <div style={{width:"60%"}}>
                    <h4>{value.card.info.name} <span>-₹{value.card.info.price/100}</span></h4>
                    <p>{value.card.info.description}</p>
                </div>
                    <img src={`${resPicture}${value.card.info.imageId}`}/>
            </div>
        ))
      }
    </div>
    </div>
        ))
    }
    </div>
  )
}

export default ResturantDetail
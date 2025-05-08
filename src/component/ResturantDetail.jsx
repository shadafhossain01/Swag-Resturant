import React, { useState } from 'react'
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { resPicture } from '../utils/common';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart, increaseCart } from '../slices/cartSlice';

const ResturantDetail = ({data}) => {

 const [showIndex,setShowIndex]=useState(null)
  const cartItem=useSelector((state)=>state.cart.Item)

  const handleShow=(idx)=>{
    setShowIndex(showIndex==idx?null:idx)
 }
    const dispatch=useDispatch()
   const handleAddToCart=(item,idx)=>{
      const card=cartItem.find((singleResturant)=>singleResturant.card.info.id==idx)
      if(card){
        dispatch(increaseCart(idx))
      }
      else{
        dispatch(addToCart({...item,quantity:1}))
      }

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
                    <h4>{value.card.info.name} <span>-₹{value.card.info.price/100 || value.card.info.defaultPrice
                      /100 }</span></h4>
                    <p>{value.card.info.description}</p>
                </div>
                    <div className='img-box'>
                    <img src={`${resPicture}${value.card.info.imageId}`}/>
                    <button onClick={()=>handleAddToCart(value,value.card.info.id)} data-id="${value.card.info.id}">Add to Cart</button>
                    </div>
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
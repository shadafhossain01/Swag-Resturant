import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resPicture } from '../utils/common'
import { clearCart, discreaseCart, increaseCart, removeCart } from '../slices/cartSlice'
import { ImCross } from "react-icons/im";

const Cart = () => {
  const cartItem=useSelector((state)=>state.cart.Item)
  const dispatch=useDispatch()
  const handleClearCart=()=>{
    dispatch(clearCart())
  }
  console.log(cartItem)

  function handleIncrease(idx){
    const singleIncrease=cartItem.find((singleResturant)=>singleResturant.card.info.id==idx)
    if(singleIncrease){
      dispatch(increaseCart(idx))
    }
  }

  function handleDiscrease(idx){
    const singleIncrease=cartItem.find((singleResturant)=>singleResturant.card.info.id==idx)
    if(singleIncrease){
      dispatch(discreaseCart(idx))
    }
  }

  function handleRemove(idx){
    dispatch(removeCart(idx))
  }

  return (
    <div className='container'>
    <div className='cart-main'>
    <h2>Cart Page</h2>
  <div className='cart-box'>
  {
    cartItem.length==0 && <h3>There is no Products in your Cart. Plesae Add some Products. </h3>
  }
  {
    cartItem.map((item)=>(
      <div key={item.card.info.id} className='single-cart-box'>
      <div className='single-cart-left'>
        <img src={`${resPicture}${item.card.info.imageId}`} />
        <div>
        <h3>{item.card.info.name}</h3>
        <p>{item.card.info.category}  {`(X${item.quantity})`}</p>
        </div>
      </div>
      <div className='single-cart-right'>
        <button onClick={()=>handleIncrease(item.card.info.id)}>+</button>
        <h4>₹{(item.card.info.price/100 || item.card.info.defaultPrice/100)*(item.quantity)}</h4>
        <button onClick={()=>handleDiscrease(item.card.info.id)}>-</button>
        <ImCross className="crossIcon" onClick={()=>handleRemove(item.card.info.id)}/>
      </div>
    </div>
    ))
  }

     {
      cartItem.length>0 && <div>
      <h5>Total Price: ₹{cartItem.reduce((acc,cur)=>acc+((cur.card.info.price / 100 || cur.card.info.defaultPrice / 100)*cur.quantity),0)}</h5>
      <button className='clearCart' onClick={handleClearCart}>Clear Cart</button>
      </div>
     }
  
  </div>
  
    </div>
    </div>
  )
}

export default Cart
import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    Item:[]
  },
  reducers: {
    addToCart:(state,action)=>{
        state.Item.push(action.payload)
    },
    clearCart:(state)=>{
        state.Item=[]
    },
    increaseCart:(state,action)=>{
      const data=state.Item.find((singleRes)=>singleRes.card.info.id==action.payload)
      if(data){
        data.quantity++
      }
    },
    discreaseCart:(state,action)=>{
      const data=state.Item.find((singleRes)=>singleRes.card.info.id==action.payload)
      if(data){
        if(data.quantity>1){
          data.quantity--
        }
      }
    },
    removeCart:(state,action)=>{
      const data=state.Item.filter((singleRes)=>singleRes.card.info.id!=action.payload);
      state.Item=[...data]
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, clearCart, increaseCart ,discreaseCart,removeCart } = cartSlice.actions

export default cartSlice.reducer
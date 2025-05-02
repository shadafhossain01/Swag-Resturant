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
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
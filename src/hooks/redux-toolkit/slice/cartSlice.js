import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    searchTerm: ' ',
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = { ...action.payload, quantity: 1 }
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cartItems.push(newItem)
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
    },
    incrementQuantity: (state, action) => {
      state.cartItems.find((item) => item.id === action.payload).quantity += 1
    },
    decrementQuantity: (state, action) => {
      state.cartItems.find((item) => item.id === action.payload).quantity -= 1
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  setSearchTerm,
} = cartSlice.actions
export default cartSlice.reducer

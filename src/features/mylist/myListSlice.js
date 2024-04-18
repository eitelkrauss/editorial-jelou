import { createSlice } from '@reduxjs/toolkit'

export const myListSlice = createSlice({
  name: 'myList',
  initialState: {
    value: {},
  },
  reducers: {
    addItem: (state, action) => {
      console.log("ADDITEM: ", action)
      state.value[action.payload.ISBN] = action.payload
    },
    removeItem: (state, action) => {
      delete state.value[action.payload.ISBN]
    },
  },
})

export const { addItem, removeItem } = myListSlice.actions

export default myListSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const catalogueSlice = createSlice({
  name: 'Catalogue',
  initialState: {
    value: [],
  },
  reducers: {
    setCatalogue: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCatalogue } = catalogueSlice.actions

export default catalogueSlice.reducer
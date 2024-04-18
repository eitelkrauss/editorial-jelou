import { createSlice } from '@reduxjs/toolkit'

export const filteredCatalogueSlice = createSlice({
  name: 'catalogue',
  initialState: {
    value: [],
  },
  reducers: {
    filterCatalogue: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { filterCatalogue } = filteredCatalogueSlice.actions

export default filteredCatalogueSlice.reducer
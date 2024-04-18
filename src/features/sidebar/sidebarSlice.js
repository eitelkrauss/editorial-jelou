import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    value: false,
  },
  reducers: {
    show: (state) => {
      state.value = true
    },
    hide: (state) => {
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { show, hide } = sidebarSlice.actions

export default sidebarSlice.reducer
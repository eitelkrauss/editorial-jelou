import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    value: false,
  },
  reducers: {
    showSidebar: (state) => {
      state.value = true
    },
    hideSidebar: (state) => {
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { showSidebar, hideSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer
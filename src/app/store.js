import { configureStore } from '@reduxjs/toolkit'
import myListReducer from '../features/mylist/myListSlice'
import catalogueReducer from '../features/catalogue/catalogueSlice'

export default configureStore({
  reducer: {
    myList: myListReducer,
    catalogue: catalogueReducer
  },
})
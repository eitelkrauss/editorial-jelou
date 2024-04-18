import { configureStore } from '@reduxjs/toolkit'
import myListReducer from '../features/mylist/myListSlice'
import catalogueReducer from '../features/catalogue/catalogueSlice'
import sidebarReducer from '../features/sidebar/sidebarSlice';

const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('myList', JSON.stringify(getState().myList));
    return result;
  };
};

const repopulateMyList = () => {
  if (localStorage.getItem('myList') !== null) {
    return {
      myList: JSON.parse(localStorage.getItem('myList')),
    };
  }
};

export default configureStore({
  reducer: {
    myList: myListReducer,
    catalogue: catalogueReducer,
    sidebar: sidebarReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState: repopulateMyList()
})
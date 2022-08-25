import { configureStore } from '@reduxjs/toolkit';
import searchSliceReducer from './features/search/searchSlice';

const store = configureStore({
  reducer: {
    searchSliceReducer,
  },
});

export default store;

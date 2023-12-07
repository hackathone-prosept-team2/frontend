import { configureStore } from '@reduxjs/toolkit';
import { authReducer, pricesReduser } from 'Features';

const store = configureStore({
  reducer: {
    auth: authReducer,
    prices: pricesReduser,
  },
});

export default store;
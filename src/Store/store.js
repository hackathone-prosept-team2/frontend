import { configureStore } from '@reduxjs/toolkit';
import { 
  authReducer, 
  pricesReduser, 
  dealersReducer 
} from 'Features';

const store = configureStore({
  reducer: {
    auth: authReducer,
    prices: pricesReduser,
    dealers: dealersReducer,
  },
});

export default store;
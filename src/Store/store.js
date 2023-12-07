import { configureStore } from '@reduxjs/toolkit';
import { 
  authReducer, 
  pricesReduser, 
  dealersReducer, 
  keysReduser
} from 'Features';

const store = configureStore({
  reducer: {
    auth: authReducer,
    prices: pricesReduser,
    dealers: dealersReducer,
    keys: keysReduser,
  },
});

export default store;
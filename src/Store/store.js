import { configureStore } from '@reduxjs/toolkit';
import { 
  authReducer, 
  pricesReduser, 
  dealersReducer, 
  keysReduser,
  productsReduser,
} from 'Features'

const store = configureStore({
  reducer: {
    auth: authReducer,
    prices: pricesReduser,
    dealers: dealersReducer,
    keys: keysReduser,
    products: productsReduser
  },
});

export default store;
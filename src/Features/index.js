// Auth
export { signUp, login, tokenCheck, logout } from "./Auth/authSlice"
export { default as authReducer } from "./Auth/authSlice"
export { default as authService } from "./Auth/authService"

// Dealers
export { default as dealersService } from "./Dealers/dealersServices"
// export {  } from "./Dealers/dealersSlice"
// export { dafault as dealersReducer } from "./Dealers/dealersSlice"

// Keys
export { default as keysService } from "./Keys/keysService"
// export {  } from "./Keys/keysSlice"
// export { dafault as keysReduser } from "./Keys/keysSlice"

// Prices
export { default as pricesService } from "./Prices/pricesService"
// export {  } from "./Prices/pricesSlice"
// export { dafault as pricesReduser } from "./Prices/pricesSlice"

// Products
export { default as productsService } from "./Products/productsService"
// export {  } from "./Products/productsSlice"
// export { dafault as productsReduser } from "./Products/productsSlice"

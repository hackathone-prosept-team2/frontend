// Auth
export { signUp, login, tokenCheck, logout } from "./Auth/authSlice"
export { default as authReducer } from "./Auth/authSlice"
export { default as authService } from "./Auth/authService"

// Dealers
export { default as dealersService } from "./Dealers/dealersServices"
export { dealersList, dealersListProsept, delerRetrieve } from "./Dealers/dealersSlice"
export { default as dealersReducer } from "./Dealers/dealersSlice"

// Keys
export { default as keysService } from "./Keys/keysService"
export { 
    keysList,
    keysRetrieve,
    keysChoseMatch,
    keysDeclineMatchesList,
    keysMatchesList,
    keysPricesList,
 } from "./Keys/keysSlice"
export { default as keysReduser } from "./Keys/keysSlice"

// Prices
export { default as pricesService } from "./Prices/pricesService"
export { deletePrices, addPrices } from "./Prices/pricesSlice"
export { default as pricesReduser } from "./Prices/pricesSlice"

// Products
export { default as productsService } from "./Products/productsService"
export { getProductAll, getProductId } from "./Products/productsSlice"
export { default as productsReduser } from "./Products/productsSlice"

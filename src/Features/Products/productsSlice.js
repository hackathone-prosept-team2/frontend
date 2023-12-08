import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsService } from "Features";

const initialState = {
    products: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
}

export const getProductAll =  createAsyncThunk("products/All", async(paramsData, tunnkAPI)=> {
  try {
    return await productsService.getProductAll(paramsData)
  } catch (error) {
    return tunnkAPI.rejectWithValue(error?.response?.data)
  }
})

export const getProductId =  createAsyncThunk("products/Id", async(paramsData, tunnkAPI)=> {
  try {
    return await productsService.getProductAll(paramsData)
  } catch (error) {
    return tunnkAPI.rejectWithValue(error?.response?.data)
  }
})

 const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => { 
      builder
        .addCase(getProductAll.pending, (state) => {
            state.isLoading = true;
        })  
        .addCase(getProductAll.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.products = action.payload;
        })
        .addCase(getProductAll.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.products = null;
        })

        .addCase(getProductId.pending, (state) => {
          state.isLoading = true;
        })  
        .addCase(getProductId.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.products = action.payload;
        })
      .addCase(getProductId.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          state.products = null;
      })
    }
})
  
export default productsSlice.reducer
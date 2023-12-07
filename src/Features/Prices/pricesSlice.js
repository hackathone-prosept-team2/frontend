import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pricesService } from "Features";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
}

export const addPrices =  createAsyncThunk("prices/add", async(tunnkAPI)=> {
    try {
      return await pricesService.addPrices()
    } catch (error) {
      return tunnkAPI.rejectWithValue(error?.response?.data)
    }
})

export const deletePrices =  createAsyncThunk("prices/add", async(tunnkAPI)=> {
    try {
      return await pricesService.addPrices()
    } catch (error) {
      return tunnkAPI.rejectWithValue(error?.response?.data)
    }
})

const pricesSlice = createSlice({
    name: "prices",
    initialState,
    reducers: {},
    extraReducers: (builder) => { 
        builder
        .addCase(addPrices.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(addPrices.fulfilled, (state) => {
            state.isLoading = false;
            state.isSuccess = true;
        })
        .addCase(addPrices.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(deletePrices.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deletePrices.fulfilled, (state) => {
            state.isLoading = false;
            state.isSuccess = true;
        })
        .addCase(deletePrices.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    },
})
  
export default pricesSlice.reducer
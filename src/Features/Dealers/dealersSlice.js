import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dealersService } from "Features";

const initialState = {
    dealers: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
}

export const dealersList =  createAsyncThunk("dealers/List", async(tunnkAPI)=> {
    try {
      return await dealersService.dealersList()
    } catch (error) {
      return tunnkAPI.rejectWithValue(error?.response?.data)
    }
})

export const dealersListProsept =  createAsyncThunk("dealers/listProsept", async(tunnkAPI)=> {
    try {
      return await dealersService.dealersListProsept()
    } catch (error) {
      return tunnkAPI.rejectWithValue(error?.response?.data)
    }
})

export const delerRetrieve =  createAsyncThunk("dealers/retrieve", async(dealersData, tunnkAPI)=> {
    try {
      return await dealersService.delerRetrieve(dealersData)
    } catch (error) {
      return tunnkAPI.rejectWithValue(error?.response?.data)
    }
})

const dealersSlice = createSlice({
    name: "dealers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(dealersList.pending, (state) => {
            state.isLoading = true;
        })  
        .addCase(dealersList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.dealers = action.payload;
        })
        .addCase(dealersList.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.dealers = null;
        })

        .addCase(dealersListProsept.pending, (state) => {
            state.isLoading = true;
        })  
        .addCase(dealersListProsept.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.dealers = action.payload;
        })
        .addCase(dealersListProsept.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.dealers = null;
        })

        .addCase(delerRetrieve.pending, (state) => {
            state.isLoading = true;
        })  
        .addCase(delerRetrieve.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.dealers = action.payload;
        })
        .addCase(delerRetrieve.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.dealers = null;
        })
    },
})
  
export default dealersSlice.reducer
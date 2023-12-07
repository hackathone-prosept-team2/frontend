import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pricesService } from "Features";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
}

const pricesSlice = createSlice({
    name: "prices",
    initialState,
    reducers: {},
    extraReducers: (builder) => { return null }
})
  
export default pricesSlice.reducer
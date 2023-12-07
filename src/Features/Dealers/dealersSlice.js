import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dealersService } from "Features";

const initialState = {
    dealers: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
}

const dealersSlice = createSlice({
    name: "dealers",
    initialState,
    reducers: {},
    extraReducers: (builder) => { return null }
})
  
export default dealersSlice.reducer
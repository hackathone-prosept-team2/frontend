import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { keysService } from "Features";

const initialState = {
    keys: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
  }

const keysSlice = createSlice({
    name: "keys",
    initialState,
    reducers: {},
    extraReducers: (builder) => { return null }
})
  
export default keysSlice.reducer
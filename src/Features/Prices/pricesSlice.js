import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pricesService } from "Features";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
}
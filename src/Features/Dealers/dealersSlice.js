import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dealersService } from "Features";

const initialState = {
    dealers: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
}
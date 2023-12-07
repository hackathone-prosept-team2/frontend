import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsService } from "Features";

const initialState = {
    products: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
  }
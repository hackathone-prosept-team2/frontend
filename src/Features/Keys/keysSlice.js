import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { keysService } from "Features";

const initialState = {
    keys: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
  }
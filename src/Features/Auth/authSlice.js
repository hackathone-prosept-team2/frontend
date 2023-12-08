import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "Features";

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
  isAuthenticated: false,
}

export const signUp =  createAsyncThunk("auth/sugnUp", async(userData, tunnkAPI)=> {
  try {
    return await authService.signUp(userData)
  } catch (error) {
    return tunnkAPI.rejectWithValue(error?.response?.data)
  }
})

export const login = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
  try {
    return await authService.login(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.response?.data);
  }
})

export const tokenCheck = createAsyncThunk("auth/tokenCheck", async(tunnkAPI) => {
  try {
    return await authService.tokenCheck()
  } catch (error) {
    return tunnkAPI.rejectWithValue(error?.response?.data)
  }
})

export const logout = createAsyncThunk("auth/logout", async(tunnkAPI) =>{
  try {
    return await authService.logout()
  } catch (error) {
    return tunnkAPI.rejectWithValue(error?.response?.data)
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
      state.isAuthenticated = false;
      
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(tokenCheck.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(tokenCheck.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(tokenCheck.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
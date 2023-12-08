import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { keysService } from "Features";

const initialState = {
    keys: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
}

export const keysList =  createAsyncThunk("keys/List", async(paramsData, tunnkAPI)=> {
  try {
    return await keysService.keysList(paramsData)
  } catch (error) {
    return tunnkAPI.rejectWithValue(error?.response?.data)
  }
})

export const keysRetrieve =  createAsyncThunk("keys/Retrieve", async(paramsData, tunnkAPI)=> {
  try {
    return await keysService.keysRetrieve(paramsData)
  } catch (error) {
    return tunnkAPI.rejectWithValue(error?.response?.data)
  }
})

export const keysChoseMatch =  createAsyncThunk("keys/ChoseMatch", async(paramsData, tunnkAPI)=> {
  try {
    return await keysService.keysChoseMatch(paramsData)
  } catch (error) {
    return tunnkAPI.rejectWithValue(error?.response?.data)
  }
})

export const keysDeclineMatchesList =  createAsyncThunk("keys/DeclineMatchesList", async(paramsData, tunnkAPI)=> {
  try {
    return await keysService.keysChoseMatch(paramsData)
  } catch (error) {
    return tunnkAPI.rejectWithValue(error?.response?.data)
  }
})

export const keysMatchesList =  createAsyncThunk("keys/MatchesList", async(paramsData, tunnkAPI)=> {
  try {
    return await keysService.keysChoseMatch(paramsData)
  } catch (error) {
    return tunnkAPI.rejectWithValue(error?.response?.data)
  }
})

export const  keysPricesList =  createAsyncThunk("keys/PricesList", async(paramsData, tunnkAPI)=> {
  try {
    return await keysService.keysPricesList(paramsData)
  } catch (error) {
    return tunnkAPI.rejectWithValue(error?.response?.data)
  }
})

const keysSlice = createSlice({
    name: "keys",
    initialState,
    reducers: {},
    extraReducers: (builder) => { 
      builder
      .addCase(keysList.pending, (state) => {
        state.isLoading = true;
      })  
      .addCase(keysList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.keys = action.payload;
      })
      .addCase(keysList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.keys = null;
      })
        
      .addCase(keysRetrieve.pending, (state) => {
        state.isLoading = true;
      })  
      .addCase(keysRetrieve.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.keys = action.payload;
      })
      .addCase(keysRetrieve.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.keys = null;
      })

      .addCase(keysChoseMatch.pending, (state) => {
        state.isLoading = true;
      })  
      .addCase(keysChoseMatch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.keys = action.payload;
      })
      .addCase(keysChoseMatch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.keys = null;
      })

      .addCase(keysDeclineMatchesList.pending, (state) => {
        state.isLoading = true;
      })  
      .addCase(keysDeclineMatchesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.keys = action.payload;
      })
      .addCase(keysDeclineMatchesList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.keys = null;
      })
      
      .addCase(keysMatchesList.pending, (state) => {
        state.isLoading = true;
      })  
      .addCase(keysMatchesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.keys = action.payload;
      })
      .addCase(keysMatchesList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.keys = null;
      })

      .addCase(keysPricesList.pending, (state) => {
        state.isLoading = true;
      })  
      .addCase(keysPricesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.keys = action.payload;
      })
      .addCase(keysPricesList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.keys = null;
      })
    }
})
  
export default keysSlice.reducer
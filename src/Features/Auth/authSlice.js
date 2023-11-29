import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    message: null,
    isAuthenticated: false,
    isError: false,
    isLoading: false,
    isSuccess: false,
}


// TODO:  Добавить позже services Auths
// Вход
// Регистрация
// Выход

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      },
      logout: (state) => {
        state.isAuthenticated = false;
        state.user = null;
      },
    },
  });
  
  export const { login, logout } = authSlice.actions;
  export default authSlice.reducer;
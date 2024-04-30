import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: localStorage.getItem('email') || undefined,
  username: localStorage.getItem('username') || undefined,
  authenticated: localStorage.getItem('authenticated') || false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
        state.username = action.payload.username;
      state.authenticated = true;
      localStorage.setItem('email', action.payload.email);
      localStorage.setItem('password', action.payload.password);
      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('authenticated', true);
    },
    logout: (state) => {
      state.email = undefined;
      state.username = undefined;
      state.authenticated = false;
      localStorage.removeItem('email');
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      localStorage.removeItem('authenticated');
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer
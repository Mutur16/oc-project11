import { createSlice } from '@reduxjs/toolkit'

const initialState: AuthInitialState = {
  token: null,
  isLogged: false,
  userData: null,
  rememberMe: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLogged = true
      state.token = action.payload.token
      state.userData = action.payload.userData
      state.rememberMe = action.payload.rememberMe || false
      if (state.rememberMe) {
        localStorage.setItem('authToken', action.payload.token)
      }
    },
    loginFailureOrLogout: (state) => {
      state.isLogged = false
      state.token = null
      state.userData = null
      state.rememberMe = false
      localStorage.removeItem('authToken')
    },
    updateUserData: (state, action) => {
      state.userData = action.payload
    },
  },
})

type AuthInitialState = {
  token: null | string
  isLogged: boolean
  userData: null | UserData
  rememberMe: boolean
}

export type UserData = {
  email: string
  firstName: string
  lastName: string
  userName: string
}

export const { loginSuccess, loginFailureOrLogout, updateUserData } =
  authSlice.actions

export default authSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState: UserInitialState = {
    user: null,
    isLogged: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        loggedIn: (state) => {
            state.isLogged = true;
        },
        loggedOut: (state) => {
            state.isLogged = false;
        },
        setUserData: (state, action) => {
            state.user = action.payload;
        },
    },
})

type UserInitialState = {
    user: null | UserState,
    isLogged: boolean,
}

type UserState = {
    email: string,
    firstName: string,
    lastName: string,
    userName: string,
    token: string,
}

export const { loggedIn, loggedOut, setUserData } = userSlice.actions

export default userSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name : "auth",
    initialState : {
        id : '', 
        email : '', 
        login : false, 
        loading : true,
        error : null
    },
    reducers : {
        setLoading : (state) => {
            state.loading = true
            state.error = null
        },
        setLogin : (state, action) => {
            const {userId, email} = action.payload
            state.id = userId
            state.email = email
            state.login = true
            state.loading = false
            state.error = null
        },
        setAuthError : (state, action) => {
            const error = action.payload
            state.error = {code : error.code, messaje : error.message}
            state.loading = false
        },
        setLogout : state => {
            state.id = ''
            state.email = ''
            state.login = false
            state.loading = false
        }
    }
})

export const { setLogin, setLogout, setAuthError, setLoading } = authSlice.actions


import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name : "auth",
    initialState : {
        id : '', 
        email : '', 
        login : false, 
        loading : false,
        error : null,
        feedback : null
    },
    reducers : {
        setLoading : (state) => {
            state.loading = true
            state.error = null
            state.feedback = null
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
            state.error = {code : error.code, message : error.message}
            state.feedback = null
            state.loading = false
        },
        setFeedbackMsg : (state, action) => {
            state.error = null
            state.feedback = { message : action.payload.message }
            state.loading = false
        },
        setLogout : state => {
            state.id = ''
            state.email = ''
            state.login = false
            state.loading = false
            state.error = null
            state.feedback = null
        }
    }
})

export const { setLogin, setLogout, setAuthError, setLoading, setFeedbackMsg } = authSlice.actions

